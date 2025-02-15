<?php

namespace App\Http\Controllers\Agency;

use App\DTOs\AgencyDTO;
use App\DTOs\UserDTO;
use App\Http\Controllers\Controller;
use App\Models\Language;
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
            'username' => 'required|string|max:255|unique:users,username',
            'avatar' => ['nullable', 'file', 'mimes:jpg,png,jpeg,webp', 'max:2048'],
            'password' => ['required', Rules\Password::defaults()],
        ], [
            'username.required' => 'The username field is required.',
            'username.string' => 'The username must be a valid string.',
            'username.max' => 'The username may not be greater than 255 characters.',
            'username.unique' => 'This username has already been taken.',

            'avatar.file' => 'The avatar must be a file.',
            'avatar.mimes' => 'The avatar must be a file of type: jpg, png, jpeg, webp.',
            'avatar.max' => 'The avatar may not be larger than 2MB.',

            'password.required' => 'The password field is required.',
        ]);


        $userData = [
            'username' => $request->input('username'),
            'password' => $request->input('password'),
            'avatar' => $request->file('avatar'),
            'sign_up_complete' => 0,
            'role' => 2,
        ];

        $user = StoreUser::execute(UserDTO::fromArray($userData));

        if (!$user) {
            return redirect()->back()->withErrors(['message' => "Something Went Wrong. Please try again"]);
        }

        Auth::login($user, $request->input('remember'));

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
