<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;


class SocialLoginController extends Controller
{
    public function googleRedirect(): RedirectResponse
    {
        return Socialite::driver('github')->redirect();
    }

    public function googleCallback(): RedirectResponse
    {
        $googleUser = Socialite::driver('google')->user();

        $user = User::query()->updateOrCreate([
            'email' => $googleUser->email,
        ], [
            'name' => $googleUser->name,
            'email' => $googleUser->email,
        ]);

        Auth::login($user);

        if ($user->is_signup_complete) {
            return to_route('home');
        }

        return to_route('user.info');

    }


    public function facebookRedirect(): RedirectResponse
    {
        return Socialite::driver('facebook')->redirect();
    }

    public function facebookCallback(): RedirectResponse
    {
        $facebookUser = Socialite::driver('facebook')->user();

        $user = User::query()->updateOrCreate([
            'email' => $facebookUser->email,
        ], [
            'name' => $facebookUser->name,
            'email' => $facebookUser->email,
        ]);

        Auth::login($user);

        if ($user->is_signup_complete) {
            return to_route('home');
        }

        return to_route('user.info');
    }
}
