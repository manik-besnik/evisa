<?php

namespace App\Supports;

use App\DTOs\AgencyDTO;
use App\Models\Agency;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class StoreAgency
{
    public static function execute(AgencyDTO $agencyDTO): bool
    {
        DB::beginTransaction();

        try {
            /** @var User $user */
            $user = auth()->user();
            $user->language_id = $agencyDTO->prefferLanguage;
            $user->nationality_id = $agencyDTO->nationality;
            $user->living_country_id = $agencyDTO->livingCountry;
            $user->name = $agencyDTO->personName;
            $user->email = $agencyDTO->email;
            $user->phone = $agencyDTO->phone;
            $user->profession = $agencyDTO->profession;
            $user->city = $agencyDTO->city;
            $user->is_signup_complete = 1;
            $user->update();

            /** @var Agency|null $agency */
            $agency = Agency::query()
                ->where('user_id', $user->id)
                ->first();

            if (!$agency) {
                $agency = new Agency();
                $agency->user_id = $user->id;
            }

            $agency->company_name = $agencyDTO->companyName;
            $agency->eid_no = $agencyDTO->eidNo;
            $agency->passport_no = $agencyDTO->passportNo;
            $agency->uid_no = $agencyDTO->uidNo;
            $agency->bank_details = $agencyDTO->bankDetails;
            $agency->nominee_name = $agencyDTO->nomineeName;
            $agency->nominee_passport_no = $agencyDTO->nomineePassport;
            $agency->save();

            DB::commit();

            return true;

        } catch (\Exception $exception) {
            DB::rollBack();
            return false;
        }
    }
}
