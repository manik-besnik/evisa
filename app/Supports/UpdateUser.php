<?php

namespace App\Supports;

use App\DTOs\AgencyDTO;
use App\DTOs\UserUpdateDTO;
use App\Models\User;

class UpdateUser
{
    public static function execute(AgencyDTO|UserUpdateDTO $updateDTO, User|null $user = null): User
    {

        if (!$user){
            /** @var User $user */
            $user = auth()->user();
        }

        $user->language_id = $updateDTO->prefferLanguage;
        $user->nationality_id = $updateDTO->nationality;
        $user->living_country_id = $updateDTO->livingCountry;
        $user->name = $updateDTO->personName;
        $user->email = $updateDTO->email;
        $user->phone = $updateDTO->phone;
        $user->profession = $updateDTO->profession;
        $user->city = $updateDTO->city;
        $user->is_signup_complete = 1;
        $user->update();

        return $user;
    }
}
