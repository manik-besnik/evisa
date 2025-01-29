<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Country;
use App\Models\Language;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        $countries = Country::query()->get();
        $languages = Language::query()->get();
        return Inertia::render('Auth/Register', [
            'countries' => $countries,
            'languages' => $languages
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'nullable|string|max:255',
            'email' => 'required|string|max:255|unique:users,username',
            'password' => ['required', Rules\Password::defaults()],
        ]);

        $user = User::query()->create([
            'name' => $request->input('name') ?? " ",
            'email' => $request->input('email'),
            'username' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('user.info.store', absolute: false));
    }
}
