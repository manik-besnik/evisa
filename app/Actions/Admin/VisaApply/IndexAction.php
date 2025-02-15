<?php

namespace App\Actions\Admin\VisaApply;

use App\Enums\Permissions;
use App\Models\VisaApply;
use App\Supports\UserPermission;
use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        UserPermission::isPermitted(Permissions::VIEW_VISA->value);

        $visaApplies = VisaApply::query()
            ->with(['passport'])
            ->orderByDesc('id')
            ->paginate(20);

        return Inertia::render('Admin/VisaApply/Index', [
            'visa_applies' => $visaApplies
        ]);
    }

}
