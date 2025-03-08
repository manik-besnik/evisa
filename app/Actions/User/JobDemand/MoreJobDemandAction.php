<?php

namespace App\Actions\User\JobDemand;

use Inertia\Inertia;

class MoreJobDemandAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('MoreJobDemand');
    }
}
