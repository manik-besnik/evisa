<?php

namespace App\Actions\Agency\Dashboard;

use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Agency/Dashboard');
    }

}
