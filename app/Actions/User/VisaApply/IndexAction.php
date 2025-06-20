<?php

namespace App\Actions\User\VisaApply;

use App\Supports\VisaApplySearch;
use Inertia\Inertia;
use App\Supports\JobApplyList;
use App\Models\UserCV;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        $visaApplies = VisaApplySearch::execute();
        $jobApplyList = JobApplyList::execute();
        $cv = UserCv::query()->where('user_id', auth()->id())->get();


        return Inertia::render('Report', [
            'visa_applies' => $visaApplies,
            'job_apply_list' => $jobApplyList,
            'cv_create' => $cv
        ]);
    }
}
