<?php

namespace App\Actions\User\JobDemand;

use Inertia\Inertia;

class CreateAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('JobDemand');
    }
}
