<?php

namespace App\Actions\Admin\User;

use App\Enums\Permissions;
use App\Enums\Role;
use App\Models\User;
use App\Supports\UserPermission;
use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        UserPermission::isPermitted(Permissions::VIEW_USER->value);

        return Inertia::render('Admin/User/Index', [
            'users' => User::query()->where('role', Role::USER->value)->paginate()
        ]);
    }
}
