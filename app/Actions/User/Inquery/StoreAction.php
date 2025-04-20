<?php

namespace App\Actions\User\Inquery;

use App\DTOs\CVDTO;
use App\Models\UserCV;
use App\Supports\FileUpload;
use Illuminate\Support\Facades\DB;

class StoreAction
{
    public function execute(CVDTO $cvDTO)
    {
        DB::beginTransaction();
        try {

            $avatar = null;

            if ($cvDTO->avatar) {
                $avatar = FileUpload::execute($cvDTO->avatar);
            }

            $documents = [];

            foreach (request()->all()['documents'] as $document) {

                $fullPath = FileUpload::execute($document['file']);

                $documents[] = [
                    'name' => $document['name'],
                    'url' => $fullPath,
                ];
            }

            $cv = new UserCV();
            $cv->user_id = auth()->id();
            $cv->mother_language = $cvDTO->motherLanguage;
            $cv->nationality = $cvDTO->nationality;
            $cv->name = $cvDTO->name;
            $cv->email = $cvDTO->email;
            $cv->phone = $cvDTO->phone;
            $cv->avatar = $avatar;
            $cv->gender = $cvDTO->gender;
            $cv->location = $cvDTO->location;
            $cv->region = $cvDTO->region;
            $cv->religion = $cvDTO->religion;
            $cv->blood_group = $cvDTO->bloodGroup;
            $cv->passport_no = $cvDTO->passportNo;
            $cv->passport_expiry = $cvDTO->passportExpiry;
            $cv->marital_status = $cvDTO->maritalStatus;
            $cv->country_contact_no = $cvDTO->countryContactNo;
            $cv->visa_status = $cvDTO->visaStatus;
            $cv->visa_expiry = $cvDTO->visaExpiry;
            $cv->whatsapp_no = $cvDTO->whatsappNo;
            $cv->current_state = $cvDTO->currentState;
            $cv->current_city = $cvDTO->currentCity;
            $cv->current_area = $cvDTO->currentArea;
            $cv->permanent_district = $cvDTO->permanentDistrict;
            $cv->permanent_thana = $cvDTO->permanentThana;
            $cv->permanent_village = $cvDTO->permanentVillage;
            $cv->shirt_size = $cvDTO->shirtSize;
            $cv->pant_size = $cvDTO->pantSize;
            $cv->show_size = $cvDTO->showSize;
            $cv->weight = $cvDTO->weight;
            $cv->height = $cvDTO->height;
            $cv->nearest_airport = $cvDTO->nearestAirport;
            $cv->summary = $cvDTO->summary;
            $cv->documents = $documents;
            $cv->experiences = $cvDTO->jobExperiences;
            $cv->exam_name = $cvDTO->examName;
            $cv->passing_year = $cvDTO->passingYear;
            $cv->institute = $cvDTO->institute;
            $cv->result = $cvDTO->result;
            $cv->computer_skill = $cvDTO->computerSkill;
            $cv->driving_license = $cvDTO->drivingLicense;
            $cv->driving_license_issue_date = $cvDTO->drivingLicenseIssueDate;
            $cv->driving_license_expire_date = $cvDTO->drivingLicenseExpireDate;
            $cv->english_proficiency = $cvDTO->englishProficiency;
            $cv->arabic_proficiency = $cvDTO->arabicProficiency;
            $cv->urdu_proficiency = $cvDTO->urduProficiency;
            $cv->save();
            DB::commit();

            return redirect()->back();
        } catch (\Exception $exception) {
            DB::rollBack();
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }
}
