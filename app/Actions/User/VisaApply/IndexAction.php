<?php

namespace App\Actions\User\VisaApply;

use App\Supports\VisaApplySearch;
use Inertia\Inertia;
use App\Supports\JobApplyList;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        $visaApplies = VisaApplySearch::execute();
        $jobApplyList = JobApplyList::execute();

        return Inertia::render('Report', [
            'visa_applies' => $visaApplies,
            'job_apply_list' => $jobApplyList
        ]);
    }
}
