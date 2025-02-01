<?php

namespace App\Actions\Admin\Agency;

use Inertia\Inertia;

class ShowAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Admin/Agency/Index');
    }
}
