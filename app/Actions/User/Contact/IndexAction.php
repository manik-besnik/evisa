<?php

namespace App\Actions\User\Contact;

use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Contact');
    }
}
