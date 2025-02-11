<?php

namespace App\Actions\Admin\VisaApply;

use App\Enums\Permissions;
use App\Models\VisaApply;
use App\Supports\UserPermission;
use Inertia\Inertia;

class ShowAction
{
    public function execute(VisaApply $visaApply): \Inertia\Response
    {

        UserPermission::isPermitted(Permissions::VIEW_SINGLE_VISA->value);

        $visaApply->load([
            'passport.issueCountry',
            'personalInfo' => [
                'currentNationality',
                'prevNationality',
                'birthCountry',
            ],
            'guarantor.guarantorNationality',
        ]);

        return Inertia::render('Admin/VisaApply/Show', [
            'visa_apply' => $visaApply
        ]);
    }

}
