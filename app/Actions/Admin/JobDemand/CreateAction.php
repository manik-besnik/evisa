<?php

namespace App\Actions\Admin\JobDemand;

use App\Enums\Permissions;
use App\Models\Location;
use App\Supports\UserPermission;
use Inertia\Inertia;

class CreateAction
{
    public function execute(): \Inertia\Response
    {
        UserPermission::isPermitted(Permissions::CREATE_JOB_POST->value);

        return Inertia::render('Admin/JobDemand/Create', [
            'locations' => Location::query()->select('id', 'name')->get()
        ]);
    }
}
