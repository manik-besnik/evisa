<?php

namespace App\DTOs;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Validation\Rule;

class CVDTO
{
    /** Job Apply Info */
    public UploadedFile|string|null $avatar;
    public string|null $nationality;
    public string $name;
    public string $phone;
    public string $email;
    public string $designation;
    public string|int $gender;
    public string|int $religion;
    public string|null $dateOfBirth;
    public string|null $website;
    public string|null $interests;
    public string $bloodGroup;
    public string|int $maritalStatus;
    public string $passportNo;
    public string $passportExpiry;

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

        $hasCv = \App\Models\UserCv::query()->where('user_id', auth()->id())->exists();

        $request->validate([
            'avatar' => [
                'nullable',
                Rule::requiredIf(!$hasCv),
                'file',
                'mimes:jpg,jpeg,png,webp,svg',
                'max:2048',
            ],
            'nationality' => ['required', 'min:1', 'max:250'],
            'gender' => ['required', 'min:1', 'max:250'],
            'name' => ['required', 'string', 'min:2', 'max:250'],
            'phone' => ['required', 'string', 'min:9', 'max:20'],
            'designation' => ['required', 'string', 'min:9', 'max:20'],
            'date_of_birth' => ['required', 'string', 'min:9', 'max:20'],
            'email' => ['required', 'string', 'min:2', 'max:200'],
            'website' => ['nullable', 'string', 'min:2', 'max:200'],
            'religion' => ['required', 'min:1', 'max:200'],
            'blood_group' => ['required', 'string', 'min:2', 'max:200'],
            'marital_status' => ['required', 'min:1', 'max:200'],
            'passport_no' => ['required', 'string', 'min:2', 'max:200'],
            'passport_expiry' => ['required', 'string', 'min:1', 'max:200'],
            'visa_status' => ['required', 'string', 'min:2', 'max:200'],
            'visa_expiry' => ['required', 'string', 'min:2', 'max:200'],
            'personal_skills' => ['required', 'string', 'min:2', 'max:200'],
            'interests' => ['nullable', 'string', 'min:2', 'max:200'],
            'current_state' => ['nullable', 'string', 'min:2', 'max:200'],
            'current_city' => ['nullable', 'string', 'min:2', 'max:200'],
            'current_area' => ['nullable', 'string', 'min:2', 'max:200'],
            'permanent_district' => ['nullable', 'string', 'min:2', 'max:200'],
            'permanent_thana' => ['nullable', 'string', 'min:2', 'max:200'],
            'permanent_village' => ['nullable', 'string', 'min:2', 'max:200'],
            'summary' => ['nullable', 'string', 'max:500'],

            /** Education Details */
            'educations' => ['required', 'array'],
            'educations.*.institute' => ['required', 'string', 'min:2', 'max:200'],
            'computer_skill' => ['required', 'string', 'min:2', 'max:200'],
            'languages' => ['required', 'array', 'min:2', 'max:200'],
            'languages.*.name' => ['required', 'string', 'min:2', 'max:200'],
            'references' => ['required', 'array'],
            'references.*.name' => ['required', 'string', 'min:2', 'max:200'],

            /** Job Experience */
            'job_experiences' => ['required', 'array'],
            'job_experiences.*.position' => ['required', 'string'],
            'job_experiences.*.start_date' => ['required', 'string'],
            'job_experiences.*.company' => ['required', 'string'],

        ],[
            'visa_expiry.required' => "Passport issue date is required",
        ]);

        $instance = new self;

        $instance->avatar = $request->hasFile('avatar') ? $request->file('avatar') : null;
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
        $instance->visaStatus = $request->input('visa_status');
        $instance->visaExpiry = $request->input('visa_expiry');
        $instance->currentState = $request->input('current_state');
        $instance->currentCity = $request->input('current_city');
        $instance->currentArea = $request->input('current_area');
        $instance->permanentDistrict = $request->input('permanent_district');
        $instance->permanentThana = $request->input('permanent_thana');
        $instance->permanentVillage = $request->input('permanent_village');
        $instance->summary = $request->input('summary');
        $instance->personalSkills = $request->input('personal_skills');
        $instance->languages = $request->input('languages');
        $instance->website = $request->input('website');
        $instance->interests = $request->input('interests');
        $instance->designation = $request->input('designation');
        $instance->dateOfBirth = $request->input('date_of_birth');

        /** Educational Details */
        $instance->educations = $request->input('educations');
        $instance->references = $request->input('references');
        $instance->computerSkill = $request->input('computer_skill');
        $instance->jobExperiences = $request->input('job_experiences');

        return $instance;
    }
}
