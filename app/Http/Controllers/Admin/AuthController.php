<?php

namespace App\Http\Controllers\Admin;

use App\Enums\Role;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Supports\UserPermission;
use Illuminate\Http\RedirectResponse;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{


    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/Auth/Login');
    }


    /**
     * Handle an incoming registration request.
     *
     * @throws ValidationException
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        /** @var User $user */
        $user = auth()->user();

        if ($user->role === Role::ADMIN->value) {
            UserPermission::generate();
            return to_route('admin.dashboard.index');
        }

        if ($user->role === Role::AGENCY->value) {
            return to_route('agency.dashboard.index');
        }

        return redirect()->intended(route('home', absolute: false));
    }


}
