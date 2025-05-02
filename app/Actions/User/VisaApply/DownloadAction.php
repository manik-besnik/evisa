<?php

namespace App\Actions\User\VisaApply;

use App\Models\VisaApply;
use Barryvdh\DomPDF\Facade\Pdf as DomPDF;

class DownloadAction
{
    public function execute(int $id)
    {
        $visa_apply = VisaApply::query()->with([
            'personalInfo.currentNationality',
            'personalInfo.prevNationality',
            'personalInfo.birthCountry',
            'passport.issueCountry',
            'guarantor'
        ])->findOrFail($id);


        $pdf = DomPDF::loadView('pdfs.visa-apply', compact('visa_apply'));

        $pdf->setPaper('a4');

        return $pdf->download("visa_apply_" . $visa_apply->code . ".pdf");
    }
}
