<?php

namespace App\Actions\User\VisaApply;

use App\Models\VisaApply;
use Barryvdh\DomPDF\Facade\Pdf as DomPDF;

class DownloadAction
{
    public function execute(int $id)
    {
        $visaApply = VisaApply::query()->findOrFail($id);


        $pdf = DomPDF::loadView('pdfs.jobs', compact('visaApply'));

        $pdf->setPaper('a4', 'portrait');

        return $pdf->download("job_" . $visaApply->code . ".pdf");
    }
}
