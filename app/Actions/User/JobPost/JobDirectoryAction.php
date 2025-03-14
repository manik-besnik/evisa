<?php

namespace App\Actions\User\JobPost;

use Inertia\Inertia;

class JobDirectoryAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('JobDirectory');
    }
}
