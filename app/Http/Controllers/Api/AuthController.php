<?php

namespace App\Http\Controllers\Api;

use App\DTOs\AgencyDTO;
use App\DTOs\UserDTO;
use App\DTOs\UserUpdateDTO;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Supports\ApiResponse;
use App\Supports\StoreAgency;
use App\Supports\StoreUser;
use App\Supports\UpdateUser;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * @throws ValidationException
     */
    public function login(Request $request): JsonResponse
    {


        $request->validate([
            'username' => 'required|string|min:2',
            'password' => 'required|string|min:8',
        ]);

        $userName = $request->input('username');
        $password = $request->input('password');

        /** @var User|null $user */
        $user = User::query()->where('username', $userName)->first();

        if (!$user || !Hash::check($password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $responseDate = [
            'user' => $user,
            'access_token' => $user->createToken($userName)->plainTextToken,
            'token_type' => "Bearer"
        ];

        return ApiResponse::success('Successfully Logged in', $responseDate);

    }

    /**
     * @throws ValidationException
     */
    public function register(Request $request): JsonResponse
    {

        $request->validate([
            'username' => 'required|string|max:255|unique:users,username',
            'password' => 'required|string|min:8',
        ]);

        $userName = $request->input('username');
        $password = $request->input('password');


        $userData = [
            'email' => $userName,
            'username' => $userName,
            'password' => $password,
            'avatar' => $request->file('avatar'),
            'sign_up_complete' => 0,
            'role' => 3,
        ];

        $user = StoreUser::execute(UserDTO::fromArray($userData));

        $responseDate = [
            'user' => $user,
            'access_token' => $user->createToken($userName)->plainTextToken,
            'token_type' => "Bearer"
        ];

        return ApiResponse::success('Successfully Logged in', $responseDate);

    }

    public function storeInfo(Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $request->user();

        if ($user->role === 1) {
            return ApiResponse::error('Something Went Wrong');
        }

        if ($user->role === 2) {
            return $this->storeAgencyInfo($request);
        }

        return $this->storeUserInfo($request);
    }

    private function storeUserInfo(Request $request): JsonResponse
    {
        try {

            $user = UpdateUser::execute(UserUpdateDTO::fromRequest($request));

            $responseDate = [
                'user' => $user,
            ];

            return ApiResponse::success('Successfully Logged in', $responseDate);

        } catch (\Exception $exception) {
            return ApiResponse::error('User Info Update Failed');
        }
    }

    private function storeAgencyInfo(Request $request): JsonResponse
    {
        $agency = StoreAgency::execute(AgencyDTO::fromRequest($request));

        if ($agency) {

            $agency->load('user');

            $responseDate = [
                'agency' => $agency,
                'user' => $agency->user
            ];

            return ApiResponse::success('Successfully Agency Info Updated', $responseDate);

        }

        return ApiResponse::error('Agency Info Update Failed');


    }
}
