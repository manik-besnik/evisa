<?php

namespace App\Actions\Admin\Agency;

use App\Enums\Permissions;
use App\Enums\Role;
use App\Models\User;
use App\Supports\UserPermission;
use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        UserPermission::isPermitted(Permissions::VIEW_AGENCY->value);

        return Inertia::render('Admin/Agency/Index', [
            'agencies' => User::query()->with(['agency:id,user_id,company_name,is_account_approved'])->where('role', Role::AGENCY->value)->paginate()
        ]);
    }
}
