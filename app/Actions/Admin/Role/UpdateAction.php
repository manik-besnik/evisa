<?php

namespace App\Actions\Admin\Role;

use App\Enums\Permissions;
use App\Models\Role;
use App\Supports\UserPermission;
use Illuminate\Http\Request;

class UpdateAction
{
    public function execute(int $id, Request $request)
    {
        UserPermission::isPermitted(Permissions::EDIT_ROLE->value);

        $request->validate([
            'name' => ['required', 'string', 'min:2'],
            'permissions' => ['required', 'array', 'min:1'],
        ]);


        try {

            $role = Role::query()->find($id);
            $role->name = $request->input('name');
            $role->permissions = $request->input('permissions');
            $role->update();

            return redirect()->back();

        } catch (\Exception $exception) {

            return redirect()->back()
                ->withErrors(['message' => $exception->getMessage()]);
        }
    }

}
