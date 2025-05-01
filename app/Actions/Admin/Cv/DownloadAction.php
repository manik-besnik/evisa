<?php

namespace App\Actions\Admin\Cv;

use App\Models\UserCV;
use Barryvdh\DomPDF\Facade\Pdf as DomPDF;

class DownloadAction
{
    public function execute(int $id)
    {

        $cv = UserCv::query()->with(['country'])->findOrFail($id);

        $pdf = DomPDF::loadView('pdfs.test', compact('cv'));

        $pdf->setPaper('a4', );

        return $pdf->download("cv" . $cv->name . ".pdf");
    }
}
