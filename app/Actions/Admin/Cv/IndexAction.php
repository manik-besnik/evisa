<?php

namespace App\Actions\Admin\Cv;

use App\Enums\Permissions;
use App\Supports\UserPermission;
use Inertia\Inertia;
use Inertia\Response;

class IndexAction
{
    public function execute(): Response
    {

        UserPermission::isPermitted(Permissions::VIEW_JOB_POST->value);

        return Inertia::render('Admin/CV/Index');
    }
}
