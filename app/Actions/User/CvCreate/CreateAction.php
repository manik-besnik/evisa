<?php

namespace App\Actions\User\CvCreate;

use App\Models\Language;
use App\Models\Location;
use App\Models\UserCV;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

class CreateAction
{
    public function execute(): \Inertia\Response|RedirectResponse
    {

        $cv = UserCv::query()->where('user_id', auth()->id())->exists();

        if ($cv) {
            return to_route('cv.index');
        }

        return Inertia::render('UserCV/CvCreate', [
            'locations' => Location::query()->select(['id', 'name'])->get(),
            'languages' => Language::query()->select(['id', 'name'])->get(),
        ]);
    }
}
