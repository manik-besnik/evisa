<?php

namespace App\Actions\User\JobPost;

use Inertia\Inertia;

class JobViewAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('JobView');
    }
}
