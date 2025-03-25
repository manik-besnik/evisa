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
    public string|null $email;
    public string|null $gender;
    public string|null $religion;
    public string|null $bloodGroup;
    public string|null $maritalStatus;
    public string|null $passportNo;
    public string|null $passportExpiry;
    public string|null $countryContactNo;
    public string|null $visaStatus;
    public string|null $dateOfBirth;
    public string|null $visaExpiry;
    public string|null $whatsappNo;
    public string $currentState;
    public string $currentCity;
    public string $currentArea;
    public string|null $permanentDistrict;
    public string|null $permanentThana;
    public string|null $permanentVillage;
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
    public string|null $examName;
    public string|null $passingYear;
    public string|null $institute;
    public string|null $result;
    public string|null $computerSkill;
    public string|int|null $drivingLicense;
    public string|null $drivingLicenseIssueDate;
    public string|null $drivingLicenseExpireDate;
    public string|int|null $englishProficiency;
    public string|int|null $arabicProficiency;
    public string|int|null $urduProficiency;
    public string|int|null $motherLanguage;

    /** Job Experiences */

    public array|null $jobExperiences = [];

    public static function fromRequest(Request $request): JobApplyDTO
    {
        $request->validate([
            'job_demand_id' => ['nullable'],
            'job_demands' => ['required_without:job_demand_id', 'array'],
            'avatar' => 'required|file|mimes:jpg,jpeg,png,webp,svg|max:2048',
            'region' => ['required', 'string', 'min:2', 'max:250'],
            'location' => ['required', 'string', 'min:2', 'max:250'],
            'nationality' => ['required', 'min:1', 'max:250'],
            'gender' => ['required', 'string', 'min:1', 'max:250'],
            'date_of_birth' => ['required', 'string', 'min:1', 'max:250'],
            'name' => ['required', 'string', 'min:2', 'max:250'],
            'phone' => ['required', 'string', 'min:9', 'max:20'],
            'email' => ['nullable', 'string', 'min:2', 'max:200'],
            'religion' => ['nullable', 'string', 'min:1', 'max:200'],
            'blood_group' => ['nullable', 'string', 'min:2', 'max:200'],
            'marital_status' => ['nullable', 'string', 'min:1', 'max:200'],
            'passport_no' => ['nullable', 'string', 'min:2', 'max:200'],
            'passport_expiry' => ['nullable', 'string', 'min:2', 'max:200'],
            'country_contact_no' => ['nullable', 'string', 'min:2', 'max:200'],
            'visa_status' => ['nullable', 'string', 'min:2', 'max:200'],
            'visa_expiry' => ['nullable', 'string', 'min:2', 'max:200'],
            'whatsapp_no' => ['nullable', 'string', 'min:2', 'max:200'],
            'current_state' => ['required', 'string', 'min:2', 'max:200'],
            'current_city' => ['required', 'string', 'min:2', 'max:200'],
            'current_area' => ['required', 'string', 'min:2', 'max:200'],
            'permanent_district' => ['nullable', 'string', 'min:2', 'max:200'],
            'permanent_thana' => ['nullable', 'string', 'min:2', 'max:200'],
            'permanent_village' => ['nullable', 'string', 'min:2', 'max:200'],
            'shirt_size' => ['nullable', 'string', 'max:200'],
            'pant_size' => ['nullable', 'string', 'max:200'],
            'show_size' => ['nullable', 'string', 'max:200'],
            'weight' => ['nullable', 'string', 'max:200'],
            'height' => ['nullable', 'string', 'max:200'],
            'nearest_airport' => ['nullable', 'string', 'max:250'],
            'summary' => ['nullable', 'string', 'max:500'],
            'documents' => ['nullable', 'array'],

            /** Education Details */
            'exam_name' => ['required', 'string', 'min:2', 'max:200'],
            'passing_year' => ['required', 'string', 'min:2', 'max:200'],
            'institute' => ['required', 'string', 'min:2', 'max:200'],
            'result' => ['nullable', 'string'],
            'computer_skill' => ['nullable', 'string', 'min:2', 'max:200'],
            'driving_license' => ['nullable', 'min:1', 'max:200'],
            'driving_license_issue_date' => ['nullable', 'string', 'min:2', 'max:200'],
            'driving_license_expire_date' => ['nullable', 'string', 'min:2', 'max:200'],
            'english_proficiency' => ['nullable', 'string', 'max:200'],
            'arabic_proficiency' => ['nullable', 'string', 'max:200'],
            'urdu_proficiency' => ['nullable', 'string', 'max:200'],
            'mother_language' => ['nullable', 'integer'],

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
        $instance->dateOfBirth = $request->input('date_of_birth');
        $instance->documents = $request->all()['documents'] ?? [];
        $instance->jobDemands = $request->all()['job_demands'] ?? [];

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
