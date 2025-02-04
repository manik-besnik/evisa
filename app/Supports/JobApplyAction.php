<?php

namespace App\Supports;

use App\DTOs\JobApplyDTO;
use App\Models\Education;
use App\Models\JobApply;
use App\Models\JobExperience;
use Illuminate\Support\Facades\DB;

class JobApplyAction
{
    public static function execute(int $userId, JobApplyDTO $jobApplyDTO): ?JobApply
    {
        DB::beginTransaction();

        try {

            $documents = [];

            foreach ($jobApplyDTO->documents as $document) {
                $fullPath = FileUpload::execute($document['file']);

                $documents[] = [
                    'name' => $document['name'],
                    'url' => $fullPath,
                ];
            }

            $education = self::storeEduction($userId, $jobApplyDTO);

            self::storeJobExperience($userId, $jobApplyDTO);

            $jobApply = new JobApply();
            $jobApply->user_id = $userId;
            $jobApply->education_id = $education->id;
            $jobApply->name = $jobApplyDTO->name;
            $jobApply->email = $jobApplyDTO->email;
            $jobApply->phone = $jobApplyDTO->phone;
            $jobApply->shirt_size = $jobApplyDTO->shirtSize;
            $jobApply->pant_size = $jobApplyDTO->pantSize;
            $jobApply->show_size = $jobApplyDTO->showSize;
            $jobApply->weight = $jobApplyDTO->weight;
            $jobApply->height = $jobApplyDTO->height;
            $jobApply->nearest_airport = $jobApplyDTO->nearestAirport;
            $jobApply->summary = $jobApplyDTO->summary;
            $jobApply->documents = $documents;
            $jobApply->save();

            DB::commit();

            return $jobApply;

        } catch (\Exception $exception) {

            DB::rollBack();
            return null;
        }
    }


    /**
     * @param int $userId
     * @param JobApplyDTO $jobApplyDTO
     * @return Education
     */
    private static function storeEduction(int $userId, JobApplyDTO $jobApplyDTO): Education
    {

        /** @var Education|null $education */
        $education = Education::query()->where('user_id', $userId)->first();

        if (!$education) {
            $education = new Education();
            $education->user_id = $userId;
        }

        $education->mother_language = $jobApplyDTO->motherLanguage;
        $education->exam_name = $jobApplyDTO->examName;
        $education->passing_year = $jobApplyDTO->passingYear;
        $education->institute = $jobApplyDTO->institute;
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

    private static function storeJobExperience(int $userId, JobApplyDTO $jobApplyDTO): void
    {
        $experiences = [];

        foreach ($jobApplyDTO->jobExperiences as $jobExperience) {

            if (isset($jobExperience['id'])) {
                $experience = JobExperience::query()->find($jobExperience['id']);
                $experience->country_id = $jobExperience['country_id'];
                $experience->position = $jobExperience['position'];
                $experience->duration = $jobExperience['duration'];
                $experience->company = $jobExperience['company'];

                $experience->update();
            } else {
                $experiences[] = [
                    'user_id' => $userId,
                    'country_id' => $jobExperience['country_id'],
                    'position' => $jobExperience['position'],
                    'duration' => $jobExperience['duration'],
                    'company' => $jobExperience['company'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }
        }

        JobExperience::query()->insert($experiences);
    }
}
