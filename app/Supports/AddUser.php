<?php

namespace App\Supports;

use App\DTOs\AddUserDTO;
use App\Enums\Role;
use App\Models\User;

/** This Class For Added User by Admin or Agency */
class AddUser
{
    public static function execute(AddUserDTO $addUserDTO): User|string
    {
        try {

            $user = new User();
            $user->language_id = $addUserDTO->prefferLanguage;
            $user->nationality_id = $addUserDTO->nationality;
            $user->living_country_id = $addUserDTO->livingCountry;
            $user->username = $addUserDTO->username;
            $user->password = $addUserDTO->password;
            $user->name = $addUserDTO->name;
            $user->email = $addUserDTO->email;
            $user->phone = $addUserDTO->phone;
            $user->profession = $addUserDTO->profession;
            $user->city = $addUserDTO->city;
            $user->role = Role::USER->value;
            $user->is_signup_complete = 1;
            $user->added_by = auth()->id();
            $user->save();

            return $user;

        } catch (\Exception $exception) {

            return $exception->getMessage();
        }
    }
}
