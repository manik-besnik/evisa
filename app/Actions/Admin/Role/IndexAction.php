<?php

namespace App\Actions\Admin\Role;

use App\Enums\Permissions;
use App\Supports\UserPermission;
use Inertia\Inertia;

class IndexAction
{

    public function execute(): \Inertia\Response
    {
        UserPermission::isPermitted(Permissions::VIEW_ROLE->value);

        return Inertia::render('Admin/Role', [
            'roles' => \App\Models\Role::query()->get(),
        ]);
    }

}
