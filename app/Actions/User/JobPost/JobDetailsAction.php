<?php

namespace App\Actions\User\JobPost;

use Inertia\Inertia;

class JobDetailsAction
{
    public function execute(int $id): \Inertia\Response
    {
        // This is where you would fetch the job details from your database
        // For example:
        // $job = Job::findOrFail($id);

        // For now, let's just create a sample job based on ID
        $job = [
            'id' => $id,
            'title' => "Security",
            'salary' => "AED 2200",
            'salaryRange' => "1850-2500 AED",
            'code' => "0000003",
            'location' => "Dubai",
            'image' => "images/secu.png",
            'category' => "Ready Job",
            'visaValidity' => "02 years",
            'accommodation' => "The Company",
            'transport' => "The Company",
            'food' => "Self",
            'medicalInsurance' => "As per UAE labour laws",
            'workingHours' => "8 Hours (As per Company Policy)",
            'vacationBenefits' => "As per UAE labour laws",
            'ageLimits' => "20-32",
            'inDemandWorkers' => "50 People",
            'education' => "Must have ability to read and write English",
            'companyActivities' => "Established security service company",
            'contactNumber' => "+971 528260909",
            'alternateNumbers' => "0508074795, 0501289360",
            'applicationRequirements' => "passport, white background photo, clear visit visa copy or cancellation copy and to be in our format."
        ];

        return Inertia::render('JobDetailView', [
            'job' => $job
        ]);
    }
}
