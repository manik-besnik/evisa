<?php

namespace App\Actions\Admin\Agency;

use App\Enums\Role;
use App\Models\User;
use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Admin/Agency/Index', [
            'agencies' => User::query()->where('role', Role::AGENCY->value)->paginate()
        ]);
    }
}
