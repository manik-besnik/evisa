<?php

namespace App\Actions\User\VisaApply;

use Inertia\Inertia;

class VisaAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Visa');
    }
}
