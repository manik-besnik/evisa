<?php

namespace App\Actions\User\Agency;

use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Agency');
    }
}
