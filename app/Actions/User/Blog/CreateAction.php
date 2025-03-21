<?php

namespace App\Actions\User\Blog;

use Inertia\Inertia;

class CreateAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Blog');
    }
}
