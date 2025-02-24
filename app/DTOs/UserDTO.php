<?php

namespace App\DTOs;

use App\Enums\Role;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class UserDTO
{
    public string|null $name;
    public string|null $email;
    public string|null $username;
    public UploadedFile|string|null $avatar;
    public string|null $password = "password";
    public int $role = Role::USER->value;
    public int $roleId = 1;
    public int $signUpComplete = 1;

    public static function fromRequest(Request $request): UserDTO
    {

        $instance = new self;

        $instance->name = $request->input('name');
        $instance->email = $request->input('email');
        $instance->password = $request->input('password');

        if ($request->input('role')) {
            $instance->role = Role::tryFrom((int)$request->input('role'))->value;
        }
        if ($request->input('role_id')) {
            $instance->roleId = (int)$request->input('role_id');
        }
        if ($request->input('sign_up_complete')) {
            $instance->signUpComplete = (int)$request->input('sign_up_complete');
        }

        return $instance;
    }


    /**
     * @throws ValidationException
     */
    public static function fromArray(array $user): UserDTO
    {
        Validator::make($user, [
            'username' => ['required', 'string', 'min:3'],
            'avatar' => ['nullable', 'file', 'mimes:jpg,png,jpeg,webp', 'max:2048'],
            'password' => ['required', 'string', 'min:8'],
        ])->validate();

        $instance = new self;

        $instance->name = $user['name'] ?? null;
        $instance->username = $user['username'] ?? null;
        $instance->email = $user['email'] ?? null;
        $instance->avatar = $user['avatar'] ?? null;
        $instance->password = $user['password'] ?? null;
        $instance->signUpComplete = $user['sign_up_complete'] ?? 1;

        if ($user['username'] ?? false) {
            $instance->username = $user['username'];
        }

        if ($user['role'] ?? false) {
            $instance->role = Role::tryFrom((int)$user['role'])->value;
        }
        if ($user['role_id'] ?? false) {
            $instance->roleId = (int)$user['role_id'];
        }

        return $instance;
    }


}
