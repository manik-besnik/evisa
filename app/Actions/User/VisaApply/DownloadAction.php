<?php

namespace App\Actions\User\VisaApply;

use App\Models\VisaApply;
use Barryvdh\DomPDF\Facade\Pdf as DomPDF;

class DownloadAction
{
    public function execute(int $id)
    {
        $visaApply = VisaApply::query()->findOrFail($id);


        $pdf = DomPDF::loadView('pdfs.visa-apply', compact('visaApply'));

        $pdf->setPaper('a4');

        return $pdf->download("visa_apply_" . $visaApply->code . ".pdf");
    }
}
