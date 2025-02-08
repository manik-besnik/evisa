<?php

namespace App\Http\Controllers\Agency;

use App\Actions\Agency\VisaApply\CreateAction;
use App\Actions\Agency\VisaApply\EditAction;
use App\Actions\Agency\VisaApply\IndexAction;
use App\Actions\Agency\VisaApply\StoreAction;
use App\Actions\Agency\VisaApply\UpdateAction;
use App\DTOs\VisaApplyDTO;
use App\Http\Controllers\Controller;
use App\Models\VisaApply;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class VisaApplyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexAction $indexAction): Response
    {
        return $indexAction->execute();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(CreateAction $createAction): Response
    {
        return $createAction->execute();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, StoreAction $storeAction): RedirectResponse
    {
        return $storeAction->execute(VisaApplyDTO::fromRequest($request));
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
    public function edit(VisaApply $visaApply, EditAction $editAction): Response
    {
        return $editAction->execute($visaApply);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, VisaApply $visaApply, UpdateAction $updateAction): RedirectResponse
    {
        return $updateAction->execute(VisaApplyDTO::fromRequest($request), $visaApply);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(VisaApply $visaApply)
    {
        //
    }
}
