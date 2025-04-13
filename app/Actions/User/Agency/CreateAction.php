<?php

namespace App\Actions\User\Agency;

use Inertia\Inertia;

class CreateAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Agency');
    }
}
