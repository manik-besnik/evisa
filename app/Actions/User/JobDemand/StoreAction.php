<?php

namespace App\Actions\User\JobDemand;

use App\DTOs\JobDemandDTO;

class StoreAction
{
    public function execute(JobDemandDTO $jobDemandDTO)
    {
        try {


            return redirect()->back();

        }catch (\Exception $exception){
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }
}
