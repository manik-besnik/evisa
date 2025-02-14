<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\VisaApply;
use App\Supports\ApiResponse;
use App\Supports\VisaApplySearch;
use Illuminate\Http\Request;

class VisaApplyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): \Illuminate\Http\JsonResponse
    {
        $visaApplies = VisaApplySearch::execute();

        return ApiResponse::success('Visa Apply List', ['visa_applies' => $visaApplies]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
