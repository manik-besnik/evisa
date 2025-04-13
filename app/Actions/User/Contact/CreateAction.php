<?php

namespace App\Actions\User\Contact;

use Inertia\Inertia;

class CreateAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Contact');
    }
}
