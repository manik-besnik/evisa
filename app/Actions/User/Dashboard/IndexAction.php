<?php

namespace App\Actions\User\Dashboard;

use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('User/Dashboard');
    }

}
