<?php

namespace App\Actions\Admin\Role;

use App\Enums\Permissions;
use App\Models\Role;
use App\Supports\UserPermission;
use Illuminate\Http\Request;

class StoreAction
{
    public function execute(Request $request)
    {
        UserPermission::isPermitted(Permissions::CREATE_ROLE->value);

        $request->validate([
            'name' => ['required', 'string', 'min:2'],
            'permissions' => ['required', 'array', 'min:1'],
        ]);


        try {

            $role = new Role();
            $role->name = $request->input('name');
            $role->permissions = $request->input('permissions');
            $role->save();

            return redirect()->back();

        } catch (\Exception $exception) {

            return redirect()->back()
                ->withErrors(['message' => $exception->getMessage()]);
        }
    }
}
