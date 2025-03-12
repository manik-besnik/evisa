<?php

namespace App\Actions\Admin\Dashboard;

use App\Models\User;
use Inertia\Inertia;
use App\Models\VisaApply;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Admin/Dashboard', [
            'data' => [
                'visaAppliesCount' => VisaApply::count(),
                'agent' => User::where('role', 2)->count(),
            ],
        ]);
    }
}
