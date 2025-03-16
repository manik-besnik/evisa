<?php

namespace App\DTOs;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Validation\Rule;

class JobApplyDTO
{
    /** Job Apply Info */
    public int|null $jobDemandId;
    public UploadedFile|string|null $avatar;
    public string|null $region;
    public string|null $location;
    public string|null $nationality;
    public string $name;
    public string $phone;
    public string $email;
    public string $gender;
    public string $religion;
    public string $bloodGroup;
    public string $maritalStatus;
    public string $passportNo;
    public string $passportExpiry;
    public string $countryContactNo;
    public string $visaStatus;
    public string $visaExpiry;
    public string $whatsappNo;
    public string $currentState;
    public string $currentCity;
    public string $currentArea;
    public string $permanentDistrict;
    public string $permanentThana;
    public string $permanentVillage;
    public string|null $shirtSize;
    public string|null $pantSize;
    public string|null $showSize;
    public string|null $weight;
    public string|null $height;
    public string|null $nearestAirport;
    public string|null $summary = null;
    public array|null $documents = [];
    public array|null $jobDemands = [];

    /** Education Details */
    public string $examName;
    public string $passingYear;
    public string $institute;
    public string|null $result;
    public string $computerSkill;
    public string|int $drivingLicense;
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
            'job_demand_id' => ['nullable'],
            'region' => ['required', 'string', 'min:2', 'max:250'],
            'location' => ['required', 'string', 'min:2', 'max:250'],
            'nationality' => ['required', 'min:1', 'max:250'],
            'gender' => ['required', 'string', 'min:1', 'max:250'],
            'name' => ['required', 'string', 'min:2', 'max:250'],
            'phone' => ['required', 'string', 'min:9', 'max:20'],
            'email' => ['required', 'string', 'min:2', 'max:200'],
            'religion' => ['required', 'string', 'min:1', 'max:200'],
            'blood_group' => ['required', 'string', 'min:2', 'max:200'],
            'marital_status' => ['required', 'string', 'min:1', 'max:200'],
            'passport_no' => ['required', 'string', 'min:2', 'max:200'],
            'passport_expiry' => ['required', 'string', 'min:2', 'max:200'],
            'country_contact_no' => ['required', 'string', 'min:2', 'max:200'],
            'visa_status' => ['required', 'string', 'min:2', 'max:200'],
            'visa_expiry' => ['required', 'string', 'min:2', 'max:200'],
            'whatsapp_no' => ['required', 'string', 'min:2', 'max:200'],
            'current_state' => ['required', 'string', 'min:2', 'max:200'],
            'current_city' => ['required', 'string', 'min:2', 'max:200'],
            'current_area' => ['required', 'string', 'min:2', 'max:200'],
            'permanent_district' => ['required', 'string', 'min:2', 'max:200'],
            'permanent_thana' => ['required', 'string', 'min:2', 'max:200'],
            'permanent_village' => ['required', 'string', 'min:2', 'max:200'],
            'shirt_size' => ['required', 'string', 'max:200'],
            'pant_size' => ['required', 'string', 'max:200'],
            'show_size' => ['required', 'string', 'max:200'],
            'weight' => ['required', 'string', 'max:200'],
            'height' => ['required', 'string', 'max:200'],
            'nearest_airport' => ['required', 'string', 'max:250'],
            'summary' => ['nullable', 'string', 'max:500'],
            'documents' => ['required', 'array'],
            'job_demands' => ['required', 'array'],

            /** Education Details */
            'exam_name' => ['required', 'string', 'min:2', 'max:200'],
            'passing_year' => ['required', 'string', 'min:2', 'max:200'],
            'institute' => ['required', 'string', 'min:2', 'max:200'],
            'result' => ['nullable', 'string'],
            'computer_skill' => ['required', 'string', 'min:2', 'max:200'],
            'driving_license' => ['required', 'min:1', 'max:200'],
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

        $instance->jobDemandId = (int)$request->input('job_demand_id');
        $instance->avatar = $request->hasFile('avatar') ? $request->file('avatar') : null;
        $instance->region = $request->input('region');
        $instance->location = $request->input('location');
        $instance->nationality = $request->input('nationality');
        $instance->name = $request->input('name');
        $instance->phone = $request->input('phone');
        $instance->email = $request->input('email');
        $instance->gender = $request->input('gender');
        $instance->religion = $request->input('religion');
        $instance->bloodGroup = $request->input('blood_group');
        $instance->maritalStatus = $request->input('marital_status');
        $instance->passportNo = $request->input('passport_no');
        $instance->passportExpiry = $request->input('passport_expiry');
        $instance->countryContactNo = $request->input('country_contact_no');
        $instance->visaStatus = $request->input('visa_status');
        $instance->visaExpiry = $request->input('visa_expiry');
        $instance->whatsappNo = $request->input('whatsapp_no');
        $instance->currentState = $request->input('current_state');
        $instance->currentCity = $request->input('current_city');
        $instance->currentArea = $request->input('current_area');
        $instance->permanentDistrict = $request->input('permanent_district');
        $instance->permanentThana = $request->input('permanent_thana');
        $instance->permanentVillage = $request->input('permanent_village');
        $instance->shirtSize = $request->input('shirt_size');
        $instance->pantSize = $request->input('pant_size');
        $instance->showSize = $request->input('show_size');
        $instance->weight = $request->input('weight');
        $instance->height = $request->input('height');
        $instance->nearestAirport = $request->input('nearest_airport');
        $instance->summary = $request->input('summary');
        $instance->documents = $request->all()['documents'] ?? [];
        $instance->documents = $request->all()['job_demands'] ?? [];

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
