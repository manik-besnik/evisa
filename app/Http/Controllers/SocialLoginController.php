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
        return Socialite::driver('google')->redirect();
    }

    public function googleCallback(): RedirectResponse
    {
        $googleUser = Socialite::driver('google')->user();

        /** @var User|null $user */
        $user = User::query()->where('email', $googleUser->email)->first();

        if (!$user) {
            $user = new User();
            $user->email = $googleUser->email;
            $user->name = $googleUser->name;
            $user->username = $googleUser->email;
            $user->role = 3;
            $user->is_signup_complete = 0;
            $user->save();
        }

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

        /** @var User|null $user */
        $user = User::query()->where('email', $facebookUser->email)->first();

        if (!$user) {
            $user = new User();
            $user->email = $facebookUser->email;
            $user->name = $facebookUser->name;
            $user->username = $facebookUser->email;
            $user->role = 3;
            $user->is_signup_complete = 0;
            $user->save();
        }


        Auth::login($user);

        if ($user->is_signup_complete) {
            return to_route('home');
        }

        return to_route('user.info');
    }
}
