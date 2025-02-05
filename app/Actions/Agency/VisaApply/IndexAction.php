<?php

namespace App\Actions\Agency\VisaApply;

use App\Models\VisaApply;
use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        $visaApplies = VisaApply::query()
            ->where('applied_by',auth()->id())
            ->orderByDesc('id')
            ->paginate(20);

        return Inertia::render('Agency/VisaApplyList', [
            'visa_applies' => $visaApplies
        ]);
    }

}
