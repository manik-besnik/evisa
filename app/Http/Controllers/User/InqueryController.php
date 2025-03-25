<?php

namespace App\Http\Controllers\User;

use App\Actions\User\Inquery\CreateAction;
use App\Actions\User\Inquery\IndexAction;
use App\DTOs\VisaApplyDTO;
use App\Http\Controllers\Controller;
use App\Models\VisaApply;
use Illuminate\Http\Request;

class InqueryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexAction $indexAction): \Inertia\Response
    {
        return $indexAction->execute();
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
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id, )
    {
      
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


    public function visa(VisaAction $visaAction): \Inertia\Response
    {
        return $visaAction->execute();
    }
}
