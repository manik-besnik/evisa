<?php

namespace App\Actions\User\CvCreate;

use Inertia\Inertia;

class CreateAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('CvCreate');
    }
}
