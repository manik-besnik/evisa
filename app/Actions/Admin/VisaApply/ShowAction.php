<?php

namespace App\Actions\Admin\VisaApply;

use App\Models\VisaApply;
use Inertia\Inertia;

class ShowAction
{
    public function execute(VisaApply $visaApply): \Inertia\Response
    {
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
