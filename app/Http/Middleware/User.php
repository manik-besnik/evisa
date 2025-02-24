<?php

namespace App\Http\Middleware;

use App\Enums\Role;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class User
{
    /**
     * Handle an incoming request.
     *
     * @param Closure(Request): (Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        if (!auth()->check()) {
            return to_route('login');
        }

        /** @var \App\Models\User $user */
        $user = auth()->user();

        if (!$user->is_signup_complete && !($request->routeIs('user.info') || $request->routeIs('user.info.store'))) {
            return to_route('user.info');
        }

        if ($user->role !== Role::USER->value) {
            return to_route('home');
        }

        return $next($request);
    }
}
