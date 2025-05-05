<?php

namespace App\Actions\Agency\VisaApply;

use App\Enums\Permissions;
use App\Models\VisaApply;
use App\Supports\UserPermission;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;

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
        return Inertia::render('Agency/VisaApplyShow', [
            'visa_apply' => $visaApply
        ]);
    }

    private function downloadPdf(VisaApply $visaApply): \Illuminate\Http\Response
    {
        // Generate PDF
        $pdf = PDF::loadView('pdfs.visa-applications', [
            'visaApply' => $visaApply
        ]);

        // Generate filename
        $filename = 'visa-application-' . $visaApply->id . '-' . now()->format('Y-m-d-H-i-s') . '.pdf';

        // Download the PDF
        return $pdf->download($filename);
    }
}
