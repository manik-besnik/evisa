<?php

namespace App\Actions\Admin\User;

use App\DTOs\AddUserDTO;
use App\Enums\Permissions;
use App\Models\User;
use App\Supports\AddUser;
use App\Supports\UserPermission;
use Illuminate\Http\RedirectResponse;

class StoreAction
{
    public function execute(AddUserDTO $addUserDTO): RedirectResponse
    {
        UserPermission::isPermitted(Permissions::CREATE_USER->value);

        $user = AddUser::execute($addUserDTO);

        if ($user instanceof User) {
            return to_route('admin.users.index')->with('success', "New User Added");
        }

        return redirect()->back()->withErrors(['message' => $user]);
    }
}
