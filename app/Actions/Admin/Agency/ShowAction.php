<?php

namespace App\Actions\Admin\Agency;

use App\Enums\Permissions;
use App\Models\User;
use App\Supports\UserPermission;
use Inertia\Inertia;

class ShowAction
{
    public function execute(int $id): \Inertia\Response
    {
        UserPermission::isPermitted(Permissions::VIEW_SINGLE_AGENCY->value);

        return Inertia::render('Admin/Agency/Show', [
            'agency' => User::with('agency')->findOrFail($id)
        ]);
    }
}
