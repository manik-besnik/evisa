<?php

namespace App\Actions\Admin\User;

use App\DTOs\AddUserDTO;
use App\Supports\AddUser;

class AddUserAction
{
    public function execute(AddUserDTO $addUserDTO): \Illuminate\Http\RedirectResponse
    {
        $user = AddUser::execute($addUserDTO);

        if ($user) {
            return to_route('admin.users.index')->with('success', "New User Added");
        }

        return redirect()->back()->withErrors(['message' => $user]);
    }
}
