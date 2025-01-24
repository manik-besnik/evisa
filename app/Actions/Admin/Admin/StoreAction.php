<?php

namespace App\Actions\Admin\Admin;

use App\DTOs\UserDTO;
use App\Enums\Permissions;
use App\Models\User;
use App\Supports\UserPermission;

class StoreAction
{
    public function execute(UserDTO $userDTO)
    {

        UserPermission::isPermitted(Permissions::CREATE_ADMIN->value);

        try {

            $user = new User();
            $user->name = $userDTO->name;
            $user->email = $userDTO->email;
            $user->username = $userDTO->email;
            $user->password = $userDTO->password;
            $user->role = $userDTO->role;
            $user->role_id = $userDTO->roleId;
            $user->save();

            return redirect()->back();

        } catch (\Exception $exception) {

            return redirect()->back()->withErrors([
                'message' => $exception->getMessage()
            ]);

        }
    }
}
