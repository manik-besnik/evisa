<?php

namespace App\Actions\User\CvCreate;

use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('CvCreate');
    }
}
