<?php

namespace App\Http\Controllers\Auth;

use App\DTOs\UserDTO;
use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Supports\StoreUser;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        $languages = Language::query()->get();

        return Inertia::render('Auth/Register', [
            'languages' => $languages
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'nullable|string|max:255',
            'email' => 'required|string|max:255|unique:users,username',
            'password' => ['required', Rules\Password::defaults()],
        ]);

        $userData = [
            'email' => $request->input('email'),
            'username' => $request->input('email'),
            'password' => $request->input('password'),
            'avatar' => $request->file('avatar'),
            'sign_up_complete' => 0,
            'role' => 3,
        ];

        $user = StoreUser::execute(UserDTO::fromArray($userData));

        event(new Registered($user), $request->input('remember'));

        Auth::login($user);

        return redirect(route('user.info', absolute: false));
    }
}
