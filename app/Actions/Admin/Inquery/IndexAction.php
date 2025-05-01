<?php

namespace App\Actions\Admin\Inquery;

use App\Enums\Permissions;
use App\Models\Inquery;
use App\Supports\UserPermission;
use Inertia\Inertia;
use Inertia\Response;

class IndexAction
{
    public function execute(): Response
    {

        // UserPermission::isPermitted(Permissions::VIEW_JOB_POST->value);

        $inquery = Inquery::query()->paginate(20);

        return Inertia::render('Admin/Inquery/Index', ['inquery' => $inquery]);
    }
}
