<?php

namespace App\DTOs;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class JobApplyDTO
{
    /** Job Apply Info */
    public int $jobPostId;
    public string $name;
    public string $phone;
    public string $email;
    public string|null $shirtSize;
    public string|null $pantSize;
    public string|null $showSize;
    public string|null $weight;
    public string|null $height;
    public string|null $nearestAirport;
    public string|null $summary = null;
    public array|null $documents = [];

    /** Education Details */
    public string $examName;
    public string $passingYear;
    public string $institute;
    public string|null $result;
    public string $computerSkill;
    public string $drivingLicense;
    public string $drivingLicenseIssueDate;
    public string $drivingLicenseExpireDate;
    public string|int $englishProficiency;
    public string|int $arabicProficiency;
    public string|int $urduProficiency;
    public string|int $motherLanguage;

    /** Job Experiences */

    public array|null $jobExperiences = [];

    public static function fromRequest(Request $request): JobApplyDTO
    {
        $request->validate([
            'job_post_id' => ['required', 'integer', Rule::exists('job_posts', 'id')],
            'name' => ['required', 'string', 'min:2', 'max:250'],
            'phone' => ['required', 'string', 'min:9', 'max:20'],
            'email' => ['required', 'string', 'min:5', 'max:200'],
            'shirt_size' => ['required', 'string', 'max:200'],
            'pant_size' => ['required', 'string', 'max:200'],
            'show_size' => ['required', 'string', 'max:200'],
            'weight' => ['required', 'string', 'max:200'],
            'height' => ['required', 'string', 'max:200'],
            'nearest_airport' => ['required', 'string', 'max:250'],
            'summary' => ['nullable', 'string', 'max:500'],
            'documents' => ['required', 'array'],

            /** Education Details */
            'exam_name' => ['required', 'string', 'min:2', 'max:200'],
            'passing_year' => ['required', 'string', 'min:2', 'max:200'],
            'institute' => ['required', 'string', 'min:2', 'max:200'],
            'result' => ['nullable', 'string'],
            'computer_skill' => ['required', 'string', 'min:2', 'max:200'],
            'driving_license' => ['required', 'string', 'min:2', 'max:200'],
            'driving_license_issue_date' => ['required', 'string', 'min:2', 'max:200'],
            'english_proficiency' => ['required', 'string', 'max:200'],
            'arabic_proficiency' => ['required', 'string', 'max:200'],
            'urdu_proficiency' => ['required', 'string', 'max:200'],
            'mother_language' => ['required', 'integer'],

            /** Job Experience */
            'job_experiences' => ['required', 'array'],
            'job_experiences.*.id' => ['nullable', 'int'],
            'job_experiences.*.country_id' => ['required', 'int'],
            'job_experiences.*.position' => ['required', 'string'],
            'job_experiences.*.duration' => ['required', 'string'],
            'job_experiences.*.company' => ['required', 'string'],

        ]);


        $instance = new self;

        $instance->jobPostId = (int)$request->input('job_post_id');
        $instance->name = $request->input('name');
        $instance->phone = $request->input('phone');
        $instance->email = $request->input('email');
        $instance->shirtSize = $request->input('shirt_size');
        $instance->pantSize = $request->input('pant_size');
        $instance->showSize = $request->input('show_size');
        $instance->weight = $request->input('weight');
        $instance->height = $request->input('height');
        $instance->nearestAirport = $request->input('nearest_airport');
        $instance->summary = $request->input('summary');
        $instance->documents = $request->all()['documents'] ?? [];

        /** Educational Details */
        $instance->examName = $request->input('exam_name');
        $instance->passingYear = $request->input('passing_year');
        $instance->institute = $request->input('institute');
        $instance->result = $request->input('result');
        $instance->computerSkill = $request->input('computer_skill');
        $instance->drivingLicense = $request->input('driving_license');
        $instance->drivingLicenseIssueDate = $request->input('driving_license_issue_date');
        $instance->drivingLicenseExpireDate = $request->input('driving_license_expire_date');
        $instance->englishProficiency = $request->input('english_proficiency');
        $instance->arabicProficiency = $request->input('arabic_proficiency');
        $instance->urduProficiency = $request->input('urdu_proficiency');
        $instance->motherLanguage = (int)$request->input('mother_language');
        $instance->jobExperiences = $request->input('job_experiences');

        return $instance;
    }
}
