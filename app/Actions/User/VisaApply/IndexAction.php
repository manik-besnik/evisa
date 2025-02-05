<?php

namespace App\Actions\User\VisaApply;

use App\Models\VisaApply;
use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        $visaApplies = VisaApply::query()
            ->with(['personInfo.currentNationality','passport','guarantor'])
            ->where('user_id', auth()->id())
            ->get();

        return Inertia::render('Report', ['visa_applies' => $visaApplies]);
    }
}
