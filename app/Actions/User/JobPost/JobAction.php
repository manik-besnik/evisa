<?php

namespace App\Actions\User\JobPost;

use Inertia\Inertia;

class JobAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Job');
    }
}
