<?php

namespace App\Http\Controllers\Agency;

use App\DTOs\AgencyDTO;
use App\DTOs\UserDTO;
use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Models\User;
use App\Supports\StoreAgency;
use App\Supports\StoreUser;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{


    /**
     * Display the registration view.
     */
    public function login(): Response
    {
        return Inertia::render('Agency/Login');
    }

    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Agency/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => 'required|string|lowercase|max:255|unique:' . User::class,
            'avatar' => ['nullable', 'file', 'mimes:jpg,png,jpeg,webp', 'max:2048'],
            'password' => ['required', Rules\Password::defaults()],
        ], [
            'email.required' => 'The username field is required.',
            'email.string' => 'The username must be a valid string.',
            'email.lowercase' => 'The username must be in lowercase.',
            'email.max' => 'The username may not be greater than 255 characters.',
            'email.unique' => 'This username has already been taken.',

            'avatar.file' => 'The avatar must be a file.',
            'avatar.mimes' => 'The avatar must be a file of type: jpg, png, jpeg, webp.',
            'avatar.max' => 'The avatar may not be larger than 2MB.',

            'password.required' => 'The password field is required.',
        ]);


        $userData = [
            'email' => $request->input('email'),
            'password' => $request->input('password'),
            'avatar' => $request->file('avatar'),
            'sign_up_complete' => 0,
            'role' => 2,
        ];

        $user = StoreUser::execute(UserDTO::fromArray($userData));

        Auth::login($user,$request->input('remember'));

        return redirect(route('agency.register.agency-info'));
    }

    public function agencyInfo(): Response
    {
        $languages = Language::query()->get();

        return Inertia::render('Agency/AgencyInfo', [
            'languages' => $languages
        ]);
    }


    public function agencyInfoStore(Request $request): RedirectResponse
    {
        $agency = StoreAgency::execute(AgencyDTO::fromRequest($request));

        if ($agency) {
            return to_route('agency.dashboard.index');
        }

        return redirect()->back();
    }


}
