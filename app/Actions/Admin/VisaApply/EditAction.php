<?php

namespace App\Actions\Admin\VisaApply;

use App\Models\VisaApply;
use Inertia\Inertia;

class EditAction
{
    public function execute(VisaApply $visaApply): \Inertia\Response
    {
        $visaApply->load([
            'passport',
            'personalInfo',
            'guarantor',
        ]);

        return Inertia::render('Admin/VisaApply/Edit', [
            'visa_apply' => $visaApply,
            'personal_info' => $visaApply->personalInfo,
            'passport' => $visaApply->passport,
            'guarantor' => $visaApply->guarantor,
        ]);
    }

}
