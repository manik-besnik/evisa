<?php

namespace App\Actions\Agency\User;

use App\DTOs\AddUserDTO;
use App\Models\User;
use App\Supports\AddUser;

class StoreAction
{
    public function execute(AddUserDTO $addUserDTO): \Illuminate\Http\RedirectResponse
    {
        $user = AddUser::execute($addUserDTO);

        if ($user instanceof User) {
            return to_route('agency.users.index')->with('success', "New User Added");
        }

        return redirect()->back()->withErrors(['message' => $user]);
    }
}
