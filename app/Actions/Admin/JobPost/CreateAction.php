<?php

namespace App\Actions\Admin\JobPost;

use Inertia\Inertia;

class CreateAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Admin/JobPost/CreateJobPost');
    }
}
