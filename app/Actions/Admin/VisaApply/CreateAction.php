<?php

namespace App\Actions\Admin\VisaApply;

use App\Enums\Permissions;
use App\Enums\Role;
use App\Models\User;
use App\Supports\UserPermission;
use Inertia\Inertia;

class CreateAction
{
    public function execute(): \Inertia\Response
    {
        UserPermission::isPermitted(Permissions::CREATE_VISA->value);

        $users = User::query()->select(['id', 'name'])
            ->where('role', Role::USER->value)
            ->where('is_signup_complete', 1)
            ->get();

        return Inertia::render('Admin/VisaApply/ApplyForm', [
            'users' => $users
        ]);
    }
}
