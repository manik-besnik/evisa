<?php

namespace App\Supports;

use App\DTOs\VisaApplyDTO;
use App\Enums\Role;
use App\Enums\VisaStatus;
use App\Models\Guarantor;
use App\Models\Passport;
use App\Models\PersonalInfo;
use App\Models\User;
use App\Models\VisaApply;

class VisaApplyAction
{
    public static function execute(VisaApplyDTO $visaApplyDTO): VisaApply|null
    {

        $documents = [];

        foreach ($visaApplyDTO->documents as $document) {

            $fullPath = FileUpload::execute($document['file']);

            $documents[] = [
                'name' => $document['name'],
                'type' => $document['type'],
                'url' => $fullPath,
            ];
        }

        $appId = uniqid() . "_" . now()->timestamp;

        /** @var User $user */
        $user = auth()->user();

        if ($user->role === Role::USER->value) {
            $appId = "USER_" . $appId;
        }

        if ($user->role === Role::AGENCY->value) {
            $appId = "AGENCY_" . $appId;
        }

        /** Personal Info Store */
        $personalInfo = self::storePersonalInfo($visaApplyDTO);

        /** Passport Info Store */
        $passport = self::storePassportInfo($visaApplyDTO);

        /** Guarantor Info Store */
        $guarantor = self::storeGuarantorInfo($visaApplyDTO);

        /** Store Visa Info */
        $visaApply = new VisaApply();
        $visaApply->user_id = $visaApplyDTO->userId;
        $visaApply->personal_info_id = $personalInfo->id;
        $visaApply->passport_id = $passport->id;
        $visaApply->guarantor_id = $guarantor->id;
        $visaApply->app_id = $appId;
        $visaApply->name = $visaApplyDTO->personalName;
        $visaApply->processing_type = $visaApplyDTO->processingType;
        $visaApply->visa_type = $visaApplyDTO->visaType;
        $visaApply->visa_category = $visaApplyDTO->visaCategory;
        $visaApply->group = $visaApplyDTO->group;
        $visaApply->status = VisaStatus::PENDING->value;
        $visaApply->applied_by = auth()->id();
        $visaApply->documents = json_encode($documents);
        $visaApply->save();


        return $visaApply;

    }


    /**
     * @param VisaApplyDTO $visaApplyDTO
     * @return PersonalInfo
     */
    private static function storePersonalInfo(VisaApplyDTO $visaApplyDTO):
    PersonalInfo
    {
        /** @var PersonalInfo|null $personalInfo */
        $personalInfo = PersonalInfo::query()
            ->where('user_id', $visaApplyDTO->userId)
            ->first();

        if (!$personalInfo) {
            $personalInfo = new PersonalInfo();
        }

        $personalInfo->user_id = $visaApplyDTO->userId;
        $personalInfo->name = $visaApplyDTO->name;
        $personalInfo->name_arabic = $visaApplyDTO->nameArabic;
        $personalInfo->current_nationality = $visaApplyDTO->currentNationality;
        $personalInfo->prev_nationality = $visaApplyDTO->prevNationality;
        $personalInfo->gender = $visaApplyDTO->gender;
        $personalInfo->date_of_birth = $visaApplyDTO->dateOfBirth;
        $personalInfo->birth_country = $visaApplyDTO->birthCountry;
        $personalInfo->marital_status = $visaApplyDTO->maritalStatus;
        $personalInfo->birth_place = $visaApplyDTO->birthPlace;
        $personalInfo->birth_place_arabic = $visaApplyDTO->birthPlaceArabic;
        $personalInfo->mother_name = $visaApplyDTO->motherName;
        $personalInfo->mother_name_arabic = $visaApplyDTO->motherNameArabic;
        $personalInfo->father_name = $visaApplyDTO->fatherName;
        $personalInfo->father_name_arabic = $visaApplyDTO->fatherNameArabic;
        $personalInfo->religion = $visaApplyDTO->religion;
        $personalInfo->faith = $visaApplyDTO->faith;
        $personalInfo->profession = $visaApplyDTO->profession;
        $personalInfo->qualification = $visaApplyDTO->qualification;
        $personalInfo->save();

        return $personalInfo;
    }


    /**
     * @param VisaApplyDTO $visaApplyDTO
     * @return Passport
     */
    private static function storePassportInfo(VisaApplyDTO $visaApplyDTO):
    Passport
    {
        /** @var Passport|null $passport */
        $passport = Passport::query()->where('user_id', $visaApplyDTO->userId)->first();

        if (!$passport) {
            $passport = new Passport();
        }

        $passport->user_id = $visaApplyDTO->userId;

        $passport->passport_type = $visaApplyDTO->passportType;
        $passport->passport_no = $visaApplyDTO->passportNO;
        $passport->passport_issue_date = $visaApplyDTO->passportIssueDate;
        $passport->passport_expire_date = $visaApplyDTO->passportExpireDate;
        $passport->passport_issue_place = $visaApplyDTO->passportIssuePlace;
        $passport->passport_issue_place_arabic = $visaApplyDTO->passportIssuePlaceArabic;
        $passport->passport_issue_country = $visaApplyDTO->passportIssueCountry;
        $passport->save();

        return $passport;
    }

    /**
     * @param VisaApplyDTO $visaApplyDTO
     * @return Guarantor
     */
    private static function storeGuarantorInfo(VisaApplyDTO $visaApplyDTO):
    Guarantor
    {
        /** @var Guarantor|null $guarantor */
        $guarantor = Guarantor::query()->where('user_id', $visaApplyDTO->userId)->first();

        if (!$guarantor) {
            $guarantor = new Guarantor();
        }

        $guarantor->user_id = $visaApplyDTO->userId;
        $guarantor->name = $visaApplyDTO->guarantorName;
        $guarantor->passport_no = $visaApplyDTO->guarantorPassportNO;
        $guarantor->phone = $visaApplyDTO->guarantorPhone;
        $guarantor->nationality = $visaApplyDTO->guarantorNationality;
        $guarantor->relation = $visaApplyDTO->guarantorRelation;
        $guarantor->save();

        return $guarantor;
    }
}
