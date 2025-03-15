<?php

namespace App\Actions\User\JobDemand;

use App\Models\Location;
use Inertia\Inertia;

class SingleJobDemandAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('SingleJobDemand', [
            'locations' => Location::query()->select(['id', 'name'])->get()
        ]);
    }
}
