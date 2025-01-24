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
    public string $nameArabic;
    public int $currentNationality;
    public int $prevNationality;
    public int $gender;
    public string $dateOfBirth;
    public int $birthCountry;
    public int $maritalStatus;
    public string $birthPlace;
    public string $birthPlaceArabic;
    public string $motherName;
    public string $motherNameArabic;
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

    public string $guarantorName;
    public string $guarantorPassportNO;
    public int $guarantorNationality;
    public string $guarantorPhone;
    public string $guarantorRelation;

    /** Documents */
    public array $documents = [];

    public static function fromRequest(Request $request): VisaApplyDTO
    {
        $request->validate([
            /** Visa Info */
            'user_id' => ['required'],
            'personal_name' => ['required', 'string', 'min:2'],
            'processing_type' => ['required', Rule::in(array_column(VisaProcessingType::cases(), 'value'))],
            'visa_type' => ['required', Rule::in(array_column(VisaType::cases(), 'value'))],
            'group' => ['required', Rule::in(array_column(Group::cases(), 'value'))],

            /** General Info */
            'name' => ['required', 'string', 'min:2'],
            'name_arabic' => ['required', 'string', 'min:2'],
            'current_nationality' => ['required', 'integer', Rule::exists('countries', 'id')->whereNull('deleted_at')],
            'prev_nationality' => ['required', 'integer', Rule::exists('countries', 'id')->whereNull('deleted_at')],
            'gender' => ['required', Rule::in(array_column(Gender::cases(), 'value'))],
            'date_of_birth' => ['required', 'date'],
            'birth_country' => ['required', 'integer', Rule::exists('countries', 'id')->whereNull('deleted_at')],
            'marital_status' => ['required', 'integer', Rule::in(array_column(MaritalStatus::cases(), 'value'))],
            'birth_place' => ['required', 'string'],
            'birth_place_arabic' => ['required', 'string'],
            'mother_name' => ['required', 'string'],
            'mother_name_arabic' => ['required', 'string'],
            'father_name' => ['nullable', 'string'],
            'father_name_arabic' => ['nullable', 'string'],
            'religion' => ['nullable', 'string'],
            'faith' => ['nullable', 'string'],
            'qualification' => ['nullable', 'string'],
            'profession' => ['nullable', 'string'],

            /** Passport Info */
            'passport_type' => ['required', 'string'],
            'passport_no' => ['required', 'string'],
            'passport_issue_date' => ['required', 'date'],
            'passport_expire_date' => ['required', 'date', 'after:passport_issue_date'],
            'passport_issue_place' => ['required', 'string'],
            'passport_issue_place_arabic' => ['required', 'string'],
            'passport_issue_country' => ['required', 'integer', Rule::exists('countries', 'id')->whereNull('deleted_at')],

            /** Guarantor Info */
            'guarantor_name' => ['required', 'string'],
            'guarantor_passport_no' => ['required', 'string'],
            'guarantor_nationality' => ['required', 'integer', Rule::exists('countries', 'id')->whereNull('deleted_at')],
            'guarantor_phone' => ['required', 'string', 'regex:/^\+?\d{10,15}$/'],
            'guarantor_relation' => ['required', 'string'],

            /** Documents */
            'documents' => ['required', 'array'],
            'documents.*.name' => ['required', 'string', 'min:2'],
            'documents.*.file' => ['required', 'file', 'mimes:jpg,png,jpeg,pdf', 'max:2048'],
        ]);


        $instance = new self;

        /**  Visa Info */
        $instance->userId = (int)$request->input('user_id');
        $instance->personalName = $request->input('personal_name');
        $instance->processingType = (int)$request->input('processing_type');
        $instance->visaType = (int)$request->input('visa_type');
        $instance->group = (int)$request->input('group');

        /**  Personal Info */
        $instance->name = $request->input('name');
        $instance->nameArabic = $request->input('name_arabic');
        $instance->currentNationality = (int)$request->input('current_nationality');
        $instance->prevNationality = (int)$request->input('prev_nationality');
        $instance->dateOfBirth = $request->input('date_of_birth');
        $instance->birthCountry = $request->input('birth_country');
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

        /**  Personal Info */
        $instance->passportType = $request->input('passport_type');
        $instance->passportNO = $request->input('passport_no');
        $instance->passportIssueDate = $request->input('passport_issue_date');
        $instance->passportExpireDate = $request->input('passport_expire_date');
        $instance->passportIssuePlace = $request->input('passport_issue_place');
        $instance->passportIssuePlaceArabic = $request->input('passport_issue_place_arabic');
        $instance->passportIssueCountry = (int)$request->input('passport_issue_country');

        /**  Guarantor Info */
        $instance->guarantorName = $request->input('guarantor_name');
        $instance->guarantorPassportNO = $request->input('guarantor_passport_no');
        $instance->guarantorNationality = (int)$request->input('guarantor_nationality');
        $instance->guarantorPhone = (int)$request->input('guarantor_phone');
        $instance->guarantorRelation = (int)$request->input('guarantor_relation');
        $instance->documents = $request->input('documents');

        return $instance;

    }

}
