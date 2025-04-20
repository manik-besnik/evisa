<?php

namespace App\DTOs;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Validation\Rule;

class CVDTO
{
    /** Job Apply Info */
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
    public string|null $currentState;
    public string|null $currentCity;
    public string|null $currentArea;
    public string|null $permanentDistrict;
    public string|null $permanentThana;
    public string |null$permanentVillage;

    public string|null $summary = null;
    public string|null $personalSkills = null;
    public array|null $educations = [];
    public array|null $references = [];

    /** Education Details */
    public array|string|null $languages = [];
    public string $computerSkill;


    /** Job Experiences */

    public array|null $jobExperiences = [];

    public static function fromRequest(Request $request): CVDTO
    {
        $request->validate([
            'avatar' => 'required|file|mimes:jpg,jpeg,png,webp,svg|max:2048',
            'region' => ['required', 'string', 'min:2', 'max:250'],
            'location' => ['required', 'string', 'min:2', 'max:250'],
            'nationality' => ['required', 'min:1', 'max:250'],
            'gender' => ['required', 'string', 'min:1', 'max:250'],
            'name' => ['required', 'string', 'min:2', 'max:250'],
            'phone' => ['required', 'string', 'min:9', 'max:20'],
            'email' => ['required', 'string', 'min:2', 'max:200'],
            'website' => ['nullable', 'string', 'min:2', 'max:200'],
            'religion' => ['required', 'string', 'min:1', 'max:200'],
            'blood_group' => ['required', 'string', 'min:2', 'max:200'],
            'marital_status' => ['required', 'string', 'min:1', 'max:200'],
            'passport_no' => ['required', 'string', 'min:2', 'max:200'],
            'passport_expiry' => ['required', 'string', 'min:2', 'max:200'],
            'visa_status' => ['required', 'string', 'min:2', 'max:200'],
            'visa_expiry' => ['required', 'string', 'min:2', 'max:200'],
            'current_state' => ['nullable', 'string', 'min:2', 'max:200'],
            'current_city' => ['nullable', 'string', 'min:2', 'max:200'],
            'current_area' => ['nullable', 'string', 'min:2', 'max:200'],
            'permanent_district' => ['nullable', 'string', 'min:2', 'max:200'],
            'permanent_thana' => ['nullable', 'string', 'min:2', 'max:200'],
            'permanent_village' => ['nullable', 'string', 'min:2', 'max:200'],
            'summary' => ['nullable', 'string', 'max:500'],
            'documents' => ['required', 'array'],

            /** Education Details */
            'computer_skill' => ['required', 'string', 'min:2', 'max:200'],

            /** Job Experience */
            'job_experiences' => ['required', 'array'],
            'job_experiences.*.country_id' => ['required', 'int'],
            'job_experiences.*.position' => ['required', 'string'],
            'job_experiences.*.duration' => ['required', 'string'],
            'job_experiences.*.company' => ['required', 'string'],

        ]);


        $instance = new self;

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
