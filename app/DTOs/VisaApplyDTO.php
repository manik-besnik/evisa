<?php

namespace App\DTOs;

use App\Enums\Gender;
use App\Enums\Group;
use App\Enums\MaritalStatus;
use App\Enums\VisaProcessingType;
use App\Enums\VisaType;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class VisaApplyDTO
{

    /** Visa Info */
    public int $userId;
    public string $personalName;
    public int $processingType;
    public int $visaType;
    public int $group;

    /** General Info */

    public string $name;
    public string|null $nameArabic;
    public int $currentNationality;
    public int $prevNationality;
    public int $gender;
    public string|null $dateOfBirth;
    public int $birthCountry;
    public int $maritalStatus;
    public string|null $birthPlace;
    public string|null $birthPlaceArabic;
    public string|null $motherName;
    public string|null $motherNameArabic;
    public string|null $fatherName;
    public string|null $fatherNameArabic;
    public string|null $religion;
    public string|null $faith;
    public string|null $qualification;
    public string|null $profession;

    /** Passport Info */
    public string $passportType;
    public string $passportNO;
    public string $passportIssueDate;
    public string $passportExpireDate;
    public string $passportIssuePlace;
    public string $passportIssuePlaceArabic;
    public int $passportIssueCountry;

    /** Guarantor Info */

    public string|null $guarantorName;
    public string|null $guarantorPassportNO;
    public int|null $guarantorNationality;
    public string|null $guarantorPhone;
    public string|null $guarantorRelation;

    /** Documents */
    public array $documents = [];

    public static function fromRequest(Request $request): VisaApplyDTO
    {
        $isUpdate = $request->route('visa_apply') !== null; // Check if updating

        $rules = [
            /** Visa Info */
            'user_id' => ['required'],
            'personal_name' => ['required', 'string', 'min:2'],
            'processing_type' => ['required', Rule::in(array_column(VisaProcessingType::cases(), 'value'))],
            'visa_type' => ['required', Rule::in(array_column(VisaType::cases(), 'value'))],
            'group' => ['nullable', Rule::in(array_column(Group::cases(), 'value'))],

            /** General Info */
            'name' => ['required', 'string', 'min:2'],
            'name_arabic' => ['nullable', 'string', 'min:2'],
            'current_nationality' => ['required', 'integer', Rule::exists('countries', 'id')->whereNull('deleted_at')],
            'prev_nationality' => ['nullable', 'integer', Rule::exists('countries', 'id')->whereNull('deleted_at')],
            'gender' => ['required', Rule::in(array_column(Gender::cases(), 'value'))],
            'date_of_birth' => ['required', 'date'],
            'birth_country' => ['nullable', 'integer', Rule::exists('countries', 'id')->whereNull('deleted_at')],
            'marital_status' => ['nullable', 'integer', Rule::in(array_column(MaritalStatus::cases(), 'value'))],
            'birth_place' => ['nullable', 'string'],
            'birth_place_arabic' => ['nullable', 'string'],
            'mother_name' => ['nullable', 'string'],
            'mother_name_arabic' => ['nullable', 'string'],
            'father_name' => ['nullable', 'string'],
            'father_name_arabic' => ['nullable', 'string'],
            'religion' => ['required', 'string'],
            'faith' => ['nullable', 'string'],
            'qualification' => ['required', 'string'],
            'profession' => ['nullable', 'string'],

            /** Passport Info */
            'passport_type' => ['nullable', 'string'],
            'passport_no' => ['required', 'string'],
            'passport_issue_date' => ['required'],
            'passport_expire_date' => ['required'],
            'passport_issue_place' => ['nullable', 'string'],
            'passport_issue_place_arabic' => ['nullable', 'string'],
            'passport_issue_country' => ['nullable', 'integer', Rule::exists('countries', 'id')->whereNull('deleted_at')],

            /** Guarantor Info */
            'guarantor_name' => ['nullable', 'string'],
            'guarantor_passport_no' => ['nullable', 'string'],
            'guarantor_nationality' => ['nullable', 'integer', Rule::exists('countries', 'id')->whereNull('deleted_at')],
            'guarantor_phone' => ['nullable', 'string', 'regex:/^\+?\d{10,15}$/'],
            'guarantor_relation' => ['nullable', 'string'],
        ];

        /** Documents should be required only when creating */
        if (!$isUpdate) {
            $rules['documents'] = ['required', 'array'];
            $rules['documents.*.name'] = ['required', 'string', 'min:2'];
            $rules['documents.*.file'] = ['required', 'file', 'mimes:jpg,png,jpeg,pdf', 'max:12500'];
        }

        $request->validate($rules);

        $instance = new self;

        /** Visa Info */
        $instance->userId = (int)$request->input('user_id');
        $instance->personalName = $request->input('personal_name');
        $instance->processingType = (int)$request->input('processing_type');
        $instance->visaType = (int)$request->input('visa_type');
        $instance->group = (int)$request->input('group');

        /** Personal Info */
        $instance->name = $request->input('name');
        $instance->nameArabic = $request->input('name_arabic');
        $instance->currentNationality = (int)$request->input('current_nationality');
        $instance->prevNationality = (int)$request->input('prev_nationality');
        $instance->gender = (int)$request->input('gender');
        $instance->dateOfBirth = $request->input('date_of_birth');
        $instance->birthCountry = (int)$request->input('birth_country');
        $instance->maritalStatus = (int)$request->input('marital_status');
        $instance->birthPlace = $request->input('birth_place');
        $instance->birthPlaceArabic = $request->input('birth_place_arabic');
        $instance->motherName = $request->input('mother_name');
        $instance->motherNameArabic = $request->input('mother_name_arabic');
        $instance->fatherName = $request->input('father_name');
        $instance->fatherNameArabic = $request->input('father_name_arabic');
        $instance->religion = $request->input('religion');
        $instance->faith = $request->input('faith');
        $instance->qualification = $request->input('qualification');
        $instance->profession = $request->input('profession');

        /** Passport Info */
        $instance->passportType = $request->input('passport_type');
        $instance->passportNO = $request->input('passport_no');
        $instance->passportIssueDate = $request->input('passport_issue_date');
        $instance->passportExpireDate = $request->input('passport_expire_date');
        $instance->passportIssuePlace = $request->input('passport_issue_place');
        $instance->passportIssuePlaceArabic = $request->input('passport_issue_place_arabic');
        $instance->passportIssueCountry = (int)$request->input('passport_issue_country');

        /** Guarantor Info */
        $instance->guarantorName = $request->input('guarantor_name');
        $instance->guarantorPassportNO = $request->input('guarantor_passport_no');
        $instance->guarantorNationality = (int)$request->input('guarantor_nationality');
        $instance->guarantorPhone = $request->input('guarantor_phone');
        $instance->guarantorRelation = $request->input('guarantor_relation');

        /** Documents */
        $instance->documents = $request->all()['documents'] ?? [];

        return $instance;
    }


}
