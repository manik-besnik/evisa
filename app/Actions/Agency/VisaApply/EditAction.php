<?php

namespace App\Actions\Agency\VisaApply;

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

        return Inertia::render('Admin/VisaApply/VisaEdit', [
            'visa_apply' => $visaApply,
            'personal_info' => $visaApply->personalInfo,
            'passport' => $visaApply->passport,
            'guarantor' => $visaApply->guarantor,
        ]);
    }

}
