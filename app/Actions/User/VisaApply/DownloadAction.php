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

        $pdf->setPaper('a4', 'portrait');
    
    // Set margins to 0 using the modern approach
    $pdf->getDomPDF()->getOptions()->set([
        'margin_top' => 0,
        'margin_right' => 0,
        'margin_bottom' => 0,
        'margin_left' => 0
    ]);
        return $pdf->stream("visa_apply_" . $visa_apply->code . ".pdf");
        // return $pdf->download("visa_apply_" . $visa_apply->code . ".pdf");
    }
}
