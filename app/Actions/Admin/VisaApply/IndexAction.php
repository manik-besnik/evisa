<?php

namespace App\Actions\Admin\VisaApply;

use App\Models\VisaApply;
use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        $visaApplies = VisaApply::query()
            ->with(['passport'])
            ->orderByDesc('id')
            ->paginate(20);

        return Inertia::render('Admin/VisaApply/Index', [
            'visa_applies' => $visaApplies
        ]);
    }

}
