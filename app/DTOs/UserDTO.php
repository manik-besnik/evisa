<?php

namespace App\DTOs;

use App\Enums\Role;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;

class UserDTO
{
    public string $name;
    public string $email;
    public UploadedFile|string|null $avatar;
    public string $password = "password";
    public int $role = Role::USER->value;
    public int $roleId = 1;

    public static function fromRequest(Request $request): UserDTO
    {
        $request->validate([
            'name' => ['required', 'string', 'min:3'],
            'email' => ['required', 'string', 'min:3'],
            'avatar' => ['nullable', 'file', 'mimes:jpg,png,jpeg,webp', 'max:2048'],
            'password' => ['required', 'string', 'min:8'],
        ]);

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

        return $instance;
    }


    public static function fromArray(array $user): UserDTO
    {
        $instance = new self;

        $instance->name = $user['name'];
        $instance->email = $user['email'];
        $instance->password = $user['password'];

        if ($user['role']) {
            $instance->role = Role::tryFrom((int)$user['role'])->value;
        }
        if ($user['role_id']) {
            $instance->roleId = (int)$user['role_id'];
        }

        return $instance;
    }


}
