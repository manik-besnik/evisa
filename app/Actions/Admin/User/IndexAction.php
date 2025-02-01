<?php

namespace App\Actions\Admin\User;

use App\Enums\Role;
use App\Models\User;
use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Admin/User/Index', [
            'users' => User::query()->where('role', Role::USER->value)->paginate()
        ]);
    }
}
