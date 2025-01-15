<?php

namespace App\Actions\Admin\Dashboard;

use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Admin/Dashboard');
    }
}
