<?php

namespace App\Supports;

use App\DTOs\JobApplyDTO;
use App\Models\Education;
use App\Models\JobApply;
use App\Models\JobExperience;
use Illuminate\Support\Facades\DB;
use Exception;

class JobApplyAction
{
    public static function execute(int $userId, JobApplyDTO $jobApplyDTO): JobApply|Exception
    {
        DB::beginTransaction();

        try {

            $avatar = null;

            if ($jobApplyDTO->avatar) {
                $avatar = FileUpload::execute($jobApplyDTO->avatar);
            }

            $documents = [];

            foreach (request()->all()['documents'] as $document) {

                $fullPath = FileUpload::execute($document['file']);

                $documents[] = [
                    'name' => $document['name'],
                    'url' => $fullPath,
                ];
            }

            $education = self::storeEduction($userId, $jobApplyDTO);

            $jobApply = new JobApply();
            $jobApply->user_id = $userId;
            $jobApply->job_demand_id = $jobApplyDTO->jobDemandId;
            $jobApply->education_id = $education->id;
            $jobApply->name = $jobApplyDTO->name;
            $jobApply->email = $jobApplyDTO->email;
            $jobApply->phone = $jobApplyDTO->phone;
            $jobApply->avatar = $avatar;
            $jobApply->gender = $jobApplyDTO->gender;
            $jobApply->region = $jobApplyDTO->region;
            $jobApply->religion = $jobApplyDTO->religion;
            $jobApply->blood_group = $jobApplyDTO->bloodGroup;
            $jobApply->passport_no = $jobApplyDTO->passportNo;
            $jobApply->passport_expiry = $jobApplyDTO->passportExpiry;
            $jobApply->nationality = $jobApplyDTO->nationality;
            $jobApply->marital_status = $jobApplyDTO->maritalStatus;
            $jobApply->country_contact_no = $jobApplyDTO->countryContactNo;
            $jobApply->visa_status = $jobApplyDTO->visaStatus;
            $jobApply->visa_expiry = $jobApplyDTO->visaExpiry;
            $jobApply->whatsapp_no = $jobApplyDTO->whatsappNo;
            $jobApply->current_state = $jobApplyDTO->currentState;
            $jobApply->current_city = $jobApplyDTO->currentCity;
            $jobApply->current_area = $jobApplyDTO->currentArea;
            $jobApply->permanent_district = $jobApplyDTO->permanentDistrict;
            $jobApply->permanent_thana = $jobApplyDTO->permanentThana;
            $jobApply->permanent_village = $jobApplyDTO->permanentVillage;
            $jobApply->shirt_size = $jobApplyDTO->shirtSize;
            $jobApply->pant_size = $jobApplyDTO->pantSize;
            $jobApply->show_size = $jobApplyDTO->showSize;
            $jobApply->weight = $jobApplyDTO->weight;
            $jobApply->height = $jobApplyDTO->height;
            $jobApply->nearest_airport = $jobApplyDTO->nearestAirport;
            $jobApply->summary = $jobApplyDTO->summary;
            $jobApply->documents = $documents;
            $jobApply->job_posts = $jobApplyDTO->jobDemands;
            $jobApply->save();

            self::storeJobExperience($userId, $jobApplyDTO, $jobApply->id);

            DB::commit();

            return $jobApply;

        } catch (Exception $exception) {
            DB::rollBack();
            return $exception;
        }
    }


    /**
     * @param int $userId
     * @param JobApplyDTO $jobApplyDTO
     * @return Education
     */
    private static function storeEduction(int $userId, JobApplyDTO $jobApplyDTO): Education
    {


        $education = new Education();
        $education->user_id = $userId;
        $education->mother_language = $jobApplyDTO->motherLanguage;
        $education->exam_name = $jobApplyDTO->examName;
        $education->passing_year = $jobApplyDTO->passingYear;
        $education->institute = $jobApplyDTO->institute;
        $education->result = $jobApplyDTO->result;
        $education->computer_skill = $jobApplyDTO->computerSkill;
        $education->driving_license = $jobApplyDTO->drivingLicense;
        $education->driving_license_issue_date = $jobApplyDTO->drivingLicenseIssueDate;
        $education->driving_license_expire_date = $jobApplyDTO->drivingLicenseExpireDate;
        $education->english_proficiency = $jobApplyDTO->englishProficiency;
        $education->arabic_proficiency = $jobApplyDTO->arabicProficiency;
        $education->urdu_proficiency = $jobApplyDTO->urduProficiency;
        $education->save();

        return $education;
    }

    private static function storeJobExperience(int $userId, JobApplyDTO $jobApplyDTO, int $jobApplyId): void
    {
        $experiences = [];

        $existIds = [];

        foreach ($jobApplyDTO->jobExperiences as $jobExperience) {


            if (isset($jobExperience['id'])) {
                $existIds[] = $jobExperience['id'];
                $experience = JobExperience::query()->find($jobExperience['id']);
                $experience->country_id = $jobExperience['country_id'];
                $experience->position = $jobExperience['position'];
                $experience->duration = $jobExperience['duration'];
                $experience->company = $jobExperience['company'];

                $experience->update();
            } else {
                $experiences[] = [
                    'user_id' => $userId,
                    'job_apply_id' => $jobApplyId,
                    'country_id' => $jobExperience['country_id'],
                    'position' => $jobExperience['position'],
                    'duration' => $jobExperience['duration'],
                    'company' => $jobExperience['company'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }
        }

        JobExperience::query()->whereNotIn('id', $existIds)->delete();

        JobExperience::query()->insert($experiences);
    }
}
