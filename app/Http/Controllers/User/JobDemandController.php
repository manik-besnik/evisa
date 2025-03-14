<?php

namespace App\Http\Controllers\User;

use App\Actions\User\JobDemand\CreateAction;
use App\Actions\User\JobDemand\SingleJobDemandAction;
use App\Actions\User\JobDemand\MoreJobDemandAction;
use App\Actions\User\JobDemand\IndexAction;
use App\Actions\User\JobDemand\StoreAction;
use App\DTOs\JobDemandDTO;
use App\Http\Controllers\Controller;
use App\Models\VisaApply;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Models\JobDemand;
use Illuminate\Support\Facades\Storage;

class JobDemandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexAction $indexAction): \Inertia\Response
    {
        return $indexAction->execute();
    }

    public function singleJobDemand(SingleJobDemandAction $singleJobDemandAction): \Inertia\Response
    {
        return $singleJobDemandAction->execute();
    }

    public function moreJobDemand(MoreJobDemandAction $moreJobDemandAction): \Inertia\Response
    {
        return $moreJobDemandAction->execute();
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create(CreateAction $createAction): \Inertia\Response
    {
        return $createAction->execute();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, StoreAction $storeAction): RedirectResponse
    {
        return $storeAction->execute(JobDemandDTO::fromRequest($request));
    }

    /**
     * Display the specified resource.
     */
    public function show(VisaApply $visaApply)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(VisaApply $visaApply)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, VisaApply $visaApply)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(VisaApply $visaApply)
    {
        //
    }
}
