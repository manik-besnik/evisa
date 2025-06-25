<?php

namespace App\Actions\Admin\VisaApply;

use App\Enums\Permissions;
use App\Models\VisaApply;
use App\Supports\UserPermission;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;
use Barryvdh\DomPDF\Facade\Pdf as DomPDF;

class ShowAction
{
    public function execute(VisaApply $visaApply, ?string $action = null): \Illuminate\Http\Response|\Inertia\Response
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

        // If action is 'download', generate and return PDF
        if ($action === 'download') {
            return $this->downloadPdf($visaApply);
        }

        // Default view rendering
        return Inertia::render('Admin/VisaApply/Show', [
            'visa_apply' => $visaApply
        ]);
    }

    private function downloadPdf(VisaApply $visaApply): \Illuminate\Http\Response
    {
        // Generate PDF
        $pdf = DomPDF::loadView('pdfs.visa-apply', [
            'visa_apply' => $visaApply
        ]);



        $pdf->setPaper('a4', 'portrait');

        // Set margins to 0 using the modern approach
        $pdf->getDomPDF()->getOptions()->set([
            'margin_top' => 0,
            'margin_right' => 0,
            'margin_bottom' => 0,
            'margin_left' => 0
        ]);
        $filename = 'visa-application-' . $visaApply->id . '-' . now()->format('Y-m-d-H-i-s') . '.pdf';

        return $pdf->stream("visa_apply_" . $filename . ".pdf");
    }
    
}
