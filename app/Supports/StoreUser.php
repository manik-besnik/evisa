<?php

namespace App\Supports;

use App\DTOs\UserDTO;
use App\Models\User;

class StoreUser
{
    public static function execute(UserDTO $userDTO): false|User
    {
        try {

            $avatar = FileUpload::execute($userDTO->avatar);

            $user = new User();
            $user->name = $userDTO->name;
            $user->email = $userDTO->email;
            $user->avatar = $avatar;
            $user->role = $userDTO->role;
            $user->role_id = $userDTO->roleId;
            $user->password = $userDTO->password;
            $user->save();
            return $user;

        } catch (\Exception $exception) {
            return false;
        }
    }
}
