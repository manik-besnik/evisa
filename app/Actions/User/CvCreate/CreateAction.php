<?php

namespace App\Actions\User\CvCreate;

use App\Models\Language;
use App\Models\Location;
use App\Models\UserCV;
use Inertia\Inertia;
use Inertia\Response;

class CreateAction
{
    public function execute(): Response
    {

        $cv = UserCv::query()->where('user_id', auth()->id())->first();

        return Inertia::render('UserCV/CvCreate', [
            'locations' => Location::query()->select(['id', 'name'])->get(),
            'languages' => Language::query()->select(['id', 'name'])->get(),
            'cv' => $cv
        ]);
    }
}
