<?php

namespace App\Actions\Admin\Admin;

use App\Enums\Permissions;
use App\Models\User;
use App\Supports\UserPermission;

class DeleteAction
{
    public function execute(int $id)
    {

        UserPermission::isPermitted(Permissions::DELETE_ADMIN->value);

        try {

            User::query()->findOrFail($id)->delete();

            return redirect()->back();

        } catch (\Exception $exception) {

            return redirect()->back()->withErrors([
                'message' => $exception->getMessage()
            ]);

        }
    }
}
