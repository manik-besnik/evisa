<?php

namespace App\Actions\User\CvCreate;

use App\DTOs\CVDTO;
use App\Models\UserCV;
use App\Supports\FileUpload;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;

class StoreAction
{
    public function execute(CVDTO $cvDTO): RedirectResponse
    {

        /** @var UserCV|null $cv */
        $cv = UserCV::query()->where('user_id',auth()->id())->first();

        DB::beginTransaction();

        try {

            $avatar = null;

            if ($cvDTO->avatar) {
                $avatar = FileUpload::execute($cvDTO->avatar);
            }

            $languages = null;

            if ($cvDTO->languages) {
                $names = array_column($cvDTO->languages, 'name');
                $languages = implode(', ', $names);
            }

            if (!$cv){
                $cv = new UserCV();
            }

            $cv->user_id = auth()->id();
            $cv->nationality = $cvDTO->nationality;
            $cv->name = $cvDTO->name;
            $cv->email = $cvDTO->email;
            $cv->phone = $cvDTO->phone;
            $cv->avatar = $avatar;
            $cv->gender = $cvDTO->gender;
            $cv->religion = $cvDTO->religion;
            $cv->blood_group = $cvDTO->bloodGroup;
            $cv->passport_no = $cvDTO->passportNo;
            $cv->passport_expiry = $cvDTO->passportExpiry;
            $cv->marital_status = $cvDTO->maritalStatus;
            $cv->visa_status = $cvDTO->visaStatus;
            $cv->visa_expiry = $cvDTO->visaExpiry;
            $cv->current_state = $cvDTO->currentState;
            $cv->current_city = $cvDTO->currentCity;
            $cv->current_area = $cvDTO->currentArea;
            $cv->permanent_district = $cvDTO->permanentDistrict;
            $cv->permanent_thana = $cvDTO->permanentThana;
            $cv->permanent_village = $cvDTO->permanentVillage;
            $cv->summary = $cvDTO->summary;
            $cv->experiences = $cvDTO->jobExperiences;
            $cv->computer_skill = $cvDTO->computerSkill;
            $cv->educations = $cvDTO->educations;
            $cv->references = $cvDTO->references;
            $cv->website = $cvDTO->website;
            $cv->personal_skills = $cvDTO->personalSkills;
            $cv->interests = $cvDTO->interests;
            $cv->languages = $languages;
            $cv->save();
            DB::commit();

            return redirect()->back()->with('success', 'CV has been created.');

        } catch (\Exception $exception) {
            DB::rollBack();
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }
}
