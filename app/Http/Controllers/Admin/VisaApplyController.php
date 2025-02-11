<?php

namespace App\Http\Controllers\Admin;

use App\Actions\Admin\VisaApply\AddDocumentAction;
use App\Actions\Admin\VisaApply\ChangeStatusAction;
use App\Actions\Admin\VisaApply\CreateAction;
use App\Actions\Admin\VisaApply\EditAction;
use App\Actions\Admin\VisaApply\IndexAction;
use App\Actions\Admin\VisaApply\ShowAction;
use App\Actions\Admin\VisaApply\StoreAction;
use App\Actions\Admin\VisaApply\UpdateAction;
use App\DTOs\VisaApplyDTO;
use App\Http\Controllers\Controller;
use App\Models\Guarantor;
use App\Models\Passport;
use App\Models\PersonalInfo;
use App\Models\VisaApply;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class VisaApplyController extends Controller
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
    public function store(Request $request, StoreAction $storeAction): RedirectResponse
    {
        return $storeAction->execute(VisaApplyDTO::fromRequest($request));
    }

    /**
     * Display the specified resource.
     */
    public function show(VisaApply $visaApply, ShowAction $showAction): \Inertia\Response
    {
        return $showAction->execute($visaApply);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(VisaApply $visaApply,EditAction $editAction): \Inertia\Response
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

    public function addDocument(Request $request, int $id, AddDocumentAction $addDocumentAction): RedirectResponse
    {
        return $addDocumentAction->execute($request, $id);
    }

    public function changeStatus(Request $request, int $id, ChangeStatusAction $changeStatusAction): RedirectResponse
    {
        return $changeStatusAction->execute($request, $id);
    }

    public function visaInfo(int $user_id): JsonResponse
    {
        $personalInfo = PersonalInfo::query()->where('user_id', $user_id)->first();
        $passport = Passport::query()->where('user_id', $user_id)->first();
        $guarantor = Guarantor::query()->where('user_id', $user_id)->first();

        return response()->json([
            'personal_info' => $personalInfo,
            'passport' => $passport,
            'guarantor' => $guarantor,
        ]);
    }
}
