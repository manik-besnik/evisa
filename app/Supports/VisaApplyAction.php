<?php

namespace App\Supports;

use App\DTOs\VisaApplyDTO;
use App\Enums\VisaStatus;
use App\Models\Guarantor;
use App\Models\Passport;
use App\Models\PersonalInfo;
use App\Models\VisaApply;

class VisaApplyAction
{
    public static function execute(VisaApplyDTO $visaApplyDTO): VisaApply|null
    {
        try {

            $documents = [];

            foreach ($visaApplyDTO->documents as $document) {
                $fullPath = FileUpload::execute($document['file']);

                $documents[] = [
                    'name' => $document['name'],
                    'url' => $fullPath,
                ];
            }

            /** Store Visa Info */
            $visaApply = new VisaApply();
            $visaApply->user_id = $visaApplyDTO->userId;
            $visaApply->name = $visaApplyDTO->personalName;
            $visaApply->processing_type = $visaApplyDTO->processingType;
            $visaApply->visa_type = $visaApplyDTO->visaType;
            $visaApply->group = $visaApplyDTO->group;
            $visaApply->status = VisaStatus::PENDING->value;
            $visaApply->applied_by = auth()->id();
            $visaApply->documents = $documents;
            $visaApply->save();

            /** Personal Info Store */
            self::storePersonalInfo($visaApplyDTO, $visaApply->id);

            /** Passport Info Store */
            self::storePassportInfo($visaApplyDTO, $visaApply->id);

            /** Guarantor Info Store */
            self::storeGuarantorInfo($visaApplyDTO, $visaApply->id);


            return $visaApply;

        } catch (\Exception $exception) {
            return null;
        }
    }


    /**
     * @param VisaApplyDTO $visaApplyDTO
     * @param int $visaApplyId
     * @return void
     */
    private static function storePersonalInfo(VisaApplyDTO $visaApplyDTO, int $visaApplyId):
    void
    {
        /** @var PersonalInfo|null $personalInfo */
        $personalInfo = PersonalInfo::query()->where('user_id', $visaApplyDTO->userId)->first();

        if (!$personalInfo) {
            $personalInfo = new PersonalInfo();
        }

        $personalInfo->user_id = $visaApplyDTO->userId;
        $personalInfo->visa_apply_id = $visaApplyId;
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
    }


    /**
     * @param VisaApplyDTO $visaApplyDTO
     * @param int $visaApplyId
     * @return void
     */
    private static function storePassportInfo(VisaApplyDTO $visaApplyDTO, int $visaApplyId):
    void
    {
        /** @var Passport|null $passport */
        $passport = Passport::query()->where('user_id', $visaApplyDTO->userId)->first();

        if (!$passport) {
            $passport = new Passport();
        }

        $passport->user_id = $visaApplyDTO->userId;
        $passport->visa_apply_id = $visaApplyId;
        $passport->passport_type = $visaApplyDTO->passportType;
        $passport->passport_no = $visaApplyDTO->passportNO;
        $passport->passport_issue_date = $visaApplyDTO->passportIssueDate;
        $passport->passport_expire_date = $visaApplyDTO->passportExpireDate;
        $passport->passport_issue_place = $visaApplyDTO->passportIssuePlace;
        $passport->passport_issue_place_arabic = $visaApplyDTO->passportIssuePlaceArabic;
        $passport->passport_issue_country = $visaApplyDTO->passportIssueCountry;
        $passport->save();
    }

    /**
     * @param VisaApplyDTO $visaApplyDTO
     * @param int $visaApplyId
     * @return void
     */
    private static function storeGuarantorInfo(VisaApplyDTO $visaApplyDTO, int $visaApplyId):
    void
    {
        /** @var Guarantor|null $guarantor */
        $guarantor = Guarantor::query()->where('user_id', $visaApplyDTO->userId)->first();

        if (!$guarantor) {
            $guarantor = new Guarantor();
        }

        $guarantor->user_id = $visaApplyDTO->userId;
        $guarantor->visa_apply_id = $visaApplyId;
        $guarantor->name = $visaApplyDTO->guarantorName;
        $guarantor->passport_no = $visaApplyDTO->guarantorPassportNO;
        $guarantor->phone = $visaApplyDTO->guarantorPhone;
        $guarantor->nationality = $visaApplyDTO->guarantorNationality;
        $guarantor->relation = $visaApplyDTO->guarantorRelation;
        $guarantor->save();
    }
}
