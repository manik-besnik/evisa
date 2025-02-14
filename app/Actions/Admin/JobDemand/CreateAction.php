<?php

namespace App\Actions\Admin\JobPost;

use App\Enums\Permissions;
use App\Supports\UserPermission;
use Inertia\Inertia;

class CreateAction
{
    public function execute(): \Inertia\Response
    {
        UserPermission::isPermitted(Permissions::CREATE_JOB_POST->value);

        return Inertia::render('Admin/JobPost/CreateJobPost');
    }
}
