<?php

namespace App\Actions\User\JobDemand;

use Inertia\Inertia;

class SingleJobDemandAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('SingleJobDemand');
    }
}
