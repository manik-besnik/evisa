<?php

namespace App\Actions\User\VisaApply;

use App\Supports\VisaApplySearch;
use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {

        $visaApplies = VisaApplySearch::execute();

        return Inertia::render('Report', ['visa_applies' => $visaApplies]);
    }
}
