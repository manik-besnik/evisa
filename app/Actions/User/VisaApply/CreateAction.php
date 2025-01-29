<?php

namespace App\Actions\User\VisaApply;

use Inertia\Inertia;

class CreateAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('VisaApply');
    }
}
