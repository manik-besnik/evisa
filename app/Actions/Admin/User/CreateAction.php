<?php

namespace App\Actions\Admin\User;

use App\Enums\Permissions;
use App\Models\Language;
use App\Supports\UserPermission;
use Inertia\Inertia;

class CreateAction
{
    public function execute(): \Inertia\Response
    {
        UserPermission::isPermitted(Permissions::CREATE_USER->value);

        return Inertia::render('Admin/User/Create', [
            'languages' => Language::query()->get(),
        ]);
    }
}
