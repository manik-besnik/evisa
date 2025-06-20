<?php

namespace App\Actions\User\CvCreate;

use App\DTOs\CVDTO;
use App\Models\UserCV;
use App\Supports\FileUpload;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\UploadedFile;

class StoreAction
{
    public function execute(CVDTO $cvDTO): RedirectResponse
    {
        // Get the existing CV or initialize a new one
        // $cv = UserCV::query()->where('user_id', auth()->id())->first() ?? new UserCV();
        $cv = new UserCV();

        DB::beginTransaction();

        try {
            // Initialize $avatar (default: null or keep existing if no new upload)
            $avatar = $cv->avatar ?? null;

            // Override with new avatar if uploaded
            if ($cvDTO->avatar instanceof UploadedFile) {
                $avatar = FileUpload::execute($cvDTO->avatar);
            }

            // Handle languages (implode array to string)
            $languages = $cvDTO->languages ? implode(', ', array_column($cvDTO->languages, 'name')) : null;

            // Update CV data
            $cv->user_id = auth()->id();
            $cv->nationality = $cvDTO->nationality;
            $cv->name = $cvDTO->name;
            $cv->email = $cvDTO->email;
            $cv->phone = $cvDTO->phone;
            $cv->avatar = $avatar; // Set avatar (could be existing, new, or null)
            $cv->gender = $cvDTO->gender;
            $cv->religion = $cvDTO->religion;
            $cv->blood_group = $cvDTO->bloodGroup;
            $cv->passport_no = $cvDTO->passportNo;
            $cv->passport_expiry = $cvDTO->passportExpiry;
            $cv->marital_status = $cvDTO->maritalStatus;
            $cv->cv_type = $cvDTO->cvTtype;
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
            $cv->designation = $cvDTO->designation;
            $cv->date_of_birth = $cvDTO->dateOfBirth;
            $cv->languages = $languages;

            $cv->driving_license =  $cvDTO->drivinglicense;
            $cv->driving_license_issue_date =  $cvDTO->drivinglicenseissuedate;
            $cv->driving_license_expire_date =  $cvDTO->drivinglicenseexpiredate;
            $cv->english_proficiency =  $cvDTO->englishproficiency;
            $cv->urdu_proficiency =  $cvDTO->urduproficiency;
            $cv->arabic_proficiency =  $cvDTO->arabicproficiency;
            $cv->mother_language =  $cvDTO->motherlanguage;

            $cv->save();
            DB::commit();

            return to_route('cv.index')->with('success', 'CV has been created.');
        } catch (\Exception $exception) {
            DB::rollBack();
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }
}
