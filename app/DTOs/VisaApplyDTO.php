<?php

namespace App\DTOs;

use Illuminate\Http\Request;

class VisaApplyDTO
{

    /** Visa Info */
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
            'personal_name' => ['required', 'string', 'min:2']
        ]);


        $instance = new self;
        $instance->personalName = $request->input('personal_name');

        return $instance;


    }
}
