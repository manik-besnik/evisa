<?php

namespace App\Actions\User\Blog;

use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Blog');
    }
}
