<?php

namespace App\Actions\Admin\Admin;

use App\Enums\Permissions;
use App\Models\Role;
use App\Models\User;
use App\Supports\UserPermission;
use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        UserPermission::isPermitted(Permissions::VIEW_ADMIN->value);

        $admins = User::query()
            ->with(['adminRole:id,name'])
            ->where('role', \App\Enums\Role::ADMIN->value)
            ->get();

        $roles = Role::query()->get();

        return Inertia::render('Admin/Admin', [
            'admins' => $admins,
            'roles' => $roles,
        ]);
    }
}
