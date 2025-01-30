<?php

namespace App\Actions\User\VisaApply;

use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Report');
    }
}
