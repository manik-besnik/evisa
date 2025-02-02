<?php

namespace App\Actions\Agency\User;

use App\Models\Language;
use Inertia\Inertia;

class CreateAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Agency/User/Create', [
            'languages' => Language::query()->get(),
        ]);
    }
}
