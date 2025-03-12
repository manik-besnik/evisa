<?php

namespace App\Actions\Admin\Dashboard;

use Inertia\Inertia;
use App\Models\VisaApply;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        $visaAppliesCount = VisaApply::count();

        return Inertia::render('Admin/Dashboard', [
            'total_visa_applies' => $visaAppliesCount 
        ]);
    }
}
