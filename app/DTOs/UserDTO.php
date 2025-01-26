<?php

namespace App\DTOs;

use App\Enums\Role;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Validator;

class UserDTO
{
    public string|null $name;
    public string $email;
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


    public static function fromArray(array $user): UserDTO
    {
        Validator::make($user, [
            'email' => ['required', 'string', 'min:3'],
            'avatar' => ['nullable', 'file', 'mimes:jpg,png,jpeg,webp', 'max:2048'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        $instance = new self;

        $instance->name = $user['name'] ?? null;
        $instance->email = $user['email'];
        $instance->avatar = $user['avatar'] ?? null;
        $instance->password = $user['password'] ?? null;

        if ($user['role'] ?? false) {
            $instance->role = Role::tryFrom((int)$user['role'])->value;
        }
        if ($user['role_id'] ?? false) {
            $instance->roleId = (int)$user['role_id'];
        }
        if ($user['sign_up_complete'] ?? false) {
            $instance->signUpComplete = (int)$user['sign_up_complete'];
        }

        return $instance;
    }


}
