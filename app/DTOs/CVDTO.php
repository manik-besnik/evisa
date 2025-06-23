<?php

namespace App\DTOs;

use App\Models\UserCV;
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
    public string|null $bloodGroup;
    public string|int $maritalStatus;
    public string|null $passportNo;
    public string|null $passportExpiry;
    public string|null $cvTtype;

    public string|null $visaStatus;
    public string|null $visaExpiry;
    public string|null $currentState;
    public string|null $currentCity;
    public string|null $currentArea;
    public string|null $permanentDistrict;
    public string|null $permanentThana;
    public string|null $permanentVillage;

    public string|null $summary = null;
    public string|null $personalSkills = null;
    public array|null $educations = [];
    public array|null $references = [];

    /** Education Details */
    public array|string|null $languages = [];
    public string|null $computerSkill;
    
    public string|null $drivinglicense;
    public string|null $drivinglicenseissuedate;
    public string|null $drivinglicenseexpiredate;
    public string|null $englishproficiency;
    public string|null $urduproficiency;
    public string|null $arabicproficiency;
    public string|null $motherlanguage;

    /** Job Experiences */

    public array|null $jobExperiences = [];

    public static function fromRequest(Request $request): CVDTO
    {

        $hasCv = UserCV::query()->where('user_id', auth()->id())->exists();

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
            'designation' => ['nullable', 'string', 'min:2', 'max:20'],
            'date_of_birth' => ['nullable', 'string', 'min:2', 'max:20'],
            'email' => ['required', 'string', 'min:2', 'max:200'],
            'website' => ['nullable', 'string', 'min:2', 'max:200'],
            'religion' => ['required', 'min:1', 'max:200'],
            'blood_group' => ['nullable', 'string', 'min:2', 'max:200'],
            'marital_status' => ['required', 'min:1', 'max:200'],
            'passport_no' => ['nullable', 'string', 'min:2', 'max:200'],
            'passport_expiry' => ['nullable', 'string', 'min:1', 'max:200'],
            'visa_status' => ['nullable', 'string', 'min:2', 'max:200'],
            'visa_expiry' => ['nullable', 'string', 'min:2', 'max:200'],
            'personal_skills' => ['nullable', 'string', 'min:2', 'max:200'],
            'interests' => ['nullable', 'string', 'min:2', 'max:200'],
            'current_state' => ['nullable', 'string', 'min:2', 'max:200'],
            'cv_type' => ['nullable', 'string', 'min:2', 'max:200'],
            'current_city' => ['nullable', 'string', 'min:2', 'max:200'],
            'current_area' => ['nullable', 'string', 'min:2', 'max:200'],
            'permanent_district' => ['nullable', 'string', 'min:2', 'max:200'],
            'permanent_thana' => ['nullable', 'string', 'min:2', 'max:200'],
            'permanent_village' => ['nullable', 'string', 'min:2', 'max:200'],
            'summary' => ['nullable', 'string', 'max:500'],
            'driving_license' => ['nullable', 'string', 'max:500'],
            'driving_license_issue_date' => ['nullable', 'string', 'max:500'],
            'driving_license_expire_date' => ['nullable', 'string', 'max:500'],
            'english_proficiency' => ['nullable', 'string', 'max:500'],
            'urdu_proficiency' => ['nullable', 'string', 'max:500'],
            'arabic_proficiency' => ['nullable', 'string', 'max:500'],
            'mother_language' => ['nullable', 'string', 'max:500'],

            /** Education Details */
            'educations' => ['required', 'array'],
            'educations' => ['nullable', 'string', 'max:200'],
            'computer_skill' => ['nullable', 'string','max:200'],
            'languages' => ['nullable', 'array','max:200'],
            'languagese' => ['nullable', 'string','max:200'],
            'references' => ['nullable', 'array'],
            'references' => ['nullable', 'string', 'max:200'],

            /** Job Experience */
            'job_experiences' => ['nullable', 'array'],
            'job_experiences' => ['nullable', 'string'],
            'job_experiences' => ['nullable', 'string'],
            'job_experiences' => ['nullable', 'string'],

        ], [
            'visa_expiry.required' => "Passport issue date is required",
            'job_experiences.*.position.required' => 'Position is required for each job experience.',
            'job_experiences.*.start_date.required' => 'Duration is required for each job experience.',
            'job_experiences.*.company.required' => 'Company name is required for each job experience.',
            'references.*.name.required' => 'Reference Name is required',

        ]);

        $instance = new self;

        $instance->avatar = $request->hasFile('avatar') ? $request->file('avatar') : null;
        $instance->nationality = $request->input('nationality');
        $instance->name = $request->input('name');
        $instance->phone = $request->input('phone');
        $instance->email = $request->input('email');
        $instance->gender = $request->input('gender');
        $instance->cvTtype = $request->input('cv_type');
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

        $instance->drivinglicense = $request->input('driving_license');
        $instance->drivinglicenseissuedate = $request->input('driving_license_issue_date');
        $instance->drivinglicenseexpiredate = $request->input('driving_license_expire_date');
        $instance->englishproficiency = $request->input('english_proficiency');
        $instance->urduproficiency = $request->input('urdu_proficiency');
        $instance->arabicproficiency = $request->input('arabic_proficiency');
        $instance->motherlanguage = $request->input('mother_language');
        // dd($instance);
        return $instance;
    }
}
