<?php

namespace App\Actions\User\Inquery;

use Inertia\Inertia;

class CreateAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Inquery');
    }
}
