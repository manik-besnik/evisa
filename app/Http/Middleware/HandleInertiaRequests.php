<?php

namespace App\Http\Middleware;

use App\Enums\Role;
use App\Models\Notification;
use App\Supports\Country;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $notifications = null;

        /** @var \App\Models\User $user */
        $user = auth()->user();

        if (auth()->check() && $user->role === Role::ADMIN->value) {
            $notifications = Notification::query()->select(['id', 'title', 'created_at'])->where('user_type',Role::ADMIN->value)->get();
        }

        return [
            ...parent::share($request),
            'auth' => [
                'user' => auth()->user(),
            ],
            'ziggy' => fn() => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'notifications' => $notifications,
            'countries' => Country::get(),
            'flash' => function () {
                return [
                    'success' => Session::get('success'),
                    'error' => Session::get('error'),
                ];
            },
            'errors' => fn() => Session::get('errors') ? Session::get('errors')->getBag('default')->toArray() : (object)[],
        ];
    }
}
