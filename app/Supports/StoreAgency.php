<?php

namespace App\Supports;

use App\DTOs\AgencyDTO;
use App\Models\Agency;
use Illuminate\Support\Facades\DB;

class StoreAgency
{
    public static function execute(AgencyDTO $agencyDTO): Agency|null
    {
        DB::beginTransaction();

        try {

            $user = UserUpdate::execute($agencyDTO);

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

            return $agency;

        } catch (\Exception $exception) {
            DB::rollBack();
            return null;
        }
    }
}
