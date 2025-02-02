<?php

namespace App\Actions\User\JobDemand;

use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Report');
    }
}
