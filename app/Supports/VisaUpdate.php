<?php

namespace App\Supports;

use App\DTOs\VisaApplyDTO;
use App\Models\Guarantor;
use App\Models\Passport;
use App\Models\PersonalInfo;
use App\Models\VisaApply;

class VisaUpdate
{
    public static function execute(VisaApplyDTO $visaApplyDTO, VisaApply $visaApply): VisaApply|null
    {

        $oldDocs = (array)json_decode($visaApply->documents);

        foreach ($oldDocs as $doc) {
            $file = (array)$doc;
            if (isset($file['url'])) {

                FileUpload::delete($file['url']);
            }
        }


        $documents = [];

        foreach ($visaApplyDTO->documents as $document) {

            $fullPath = FileUpload::execute($document['file']);

            $documents[] = [
                'name' => $document['name'],
                'url' => $fullPath,
            ];
        }


        /** Personal Info Store */
        $personalInfo = self::storePersonalInfo($visaApplyDTO, $visaApply->personal_info_id);

        /** Passport Info Store */
        $passport = self::storePassportInfo($visaApplyDTO, $visaApply->passport_id);

        /** Guarantor Info Store */
        $guarantor = self::storeGuarantorInfo($visaApplyDTO, $visaApply->guarantor_id);

        $visaApply->name = $visaApplyDTO->personalName;
        $visaApply->processing_type = $visaApplyDTO->processingType;
        $visaApply->visa_type = $visaApplyDTO->visaType;
        $visaApply->group = $visaApplyDTO->group;
        $visaApply->documents = json_encode($documents);
        $visaApply->update();


        return $visaApply;

    }


    /**
     * @param VisaApplyDTO $visaApplyDTO
     * @param int $id
     * @return PersonalInfo
     */
    private static function storePersonalInfo(VisaApplyDTO $visaApplyDTO, int $id):
    PersonalInfo
    {
        /** @var PersonalInfo|null $personalInfo */
        $personalInfo = PersonalInfo::query()
            ->find($id);

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
        $personalInfo->update();

        return $personalInfo;
    }


    /**
     * @param VisaApplyDTO $visaApplyDTO
     * @param int $id
     * @return Passport
     */
    private static function storePassportInfo(VisaApplyDTO $visaApplyDTO, int $id):
    Passport
    {
        /** @var Passport|null $passport */
        $passport = Passport::query()->find($id);

        $passport->passport_type = $visaApplyDTO->passportType;
        $passport->passport_no = $visaApplyDTO->passportNO;
        $passport->passport_issue_date = $visaApplyDTO->passportIssueDate;
        $passport->passport_expire_date = $visaApplyDTO->passportExpireDate;
        $passport->passport_issue_place = $visaApplyDTO->passportIssuePlace;
        $passport->passport_issue_place_arabic = $visaApplyDTO->passportIssuePlaceArabic;
        $passport->passport_issue_country = $visaApplyDTO->passportIssueCountry;
        $passport->update();

        return $passport;
    }

    /**
     * @param VisaApplyDTO $visaApplyDTO
     * @param int $id
     * @return Guarantor
     */
    private static function storeGuarantorInfo(VisaApplyDTO $visaApplyDTO, int $id):
    Guarantor
    {
        /** @var Guarantor|null $guarantor */
        $guarantor = Guarantor::query()->find($id);

        $guarantor->name = $visaApplyDTO->guarantorName;
        $guarantor->passport_no = $visaApplyDTO->guarantorPassportNO;
        $guarantor->phone = $visaApplyDTO->guarantorPhone;
        $guarantor->nationality = $visaApplyDTO->guarantorNationality;
        $guarantor->relation = $visaApplyDTO->guarantorRelation;
        $guarantor->update();

        return $guarantor;
    }
}
