<?php

namespace App\Actions\Admin\User;

use App\Models\Language;
use Inertia\Inertia;

class CreateAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Admin/User/Create', [
            'languages' => Language::query()->get(),
        ]);
    }
}
