<?php

namespace App\Actions\User\CvCreate;

use App\Models\Language;
use App\Models\Location;
use App\Models\UserCV;
use Inertia\Inertia;
use Inertia\Response;

class CreateAction
{
    public function execute($format): Response
    {
        $cv = UserCv::query()->where('user_id', auth()->id())->first();

        $commonData = [
            'locations' => Location::query()->select(['id', 'name'])->get(),
            'languages' => Language::query()->select(['id', 'name'])->get(),
            'cv' => $cv,
            'format' => $format
        ];

        // Determine which page to render based on format
        switch ($format) {
            case 'jobFormat':
                return Inertia::render('UserCV/CvCreateJob', $commonData);

            case 'cvFormat':
                return Inertia::render('UserCV/CvCreate', $commonData);

            case 'resumeFormat':
                return Inertia::render('UserCV/CvCreateResume', $commonData);

            default:
                // Handle invalid format - you can redirect or show default page
                return Inertia::render('UserCV/CvCreate', $commonData);
        }
    }
}
