<?php

namespace App\Actions\Admin\Admin;

use App\DTOs\UserDTO;
use App\Enums\Permissions;
use App\Models\User;
use App\Supports\UserPermission;

class UpdateAction
{
    public function execute(int $userId, UserDTO $userDTO)
    {

        UserPermission::isPermitted(Permissions::EDIT_ADMIN->value);

        try {

            /** @var User $user */
            $user = User::query()->find($userId);
            $user->name = $userDTO->name;
            $user->email = $userDTO->email;
            $user->username = $userDTO->email;
            $user->role_id = $userDTO->roleId;
            $user->update();

            return redirect()->back();

        } catch (\Exception $exception) {

            return redirect()->back()->withErrors([
                'message' => $exception->getMessage()
            ]);

        }
    }
}
