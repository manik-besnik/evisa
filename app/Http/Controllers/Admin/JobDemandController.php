<?php

namespace App\Http\Controllers\Admin;

use App\Actions\Admin\JobDemand\CreateAction;
use App\Actions\Admin\JobDemand\DeleteAction;
use App\Actions\Admin\JobDemand\EditAction;
use App\Actions\Admin\JobDemand\IndexAction;
use App\Actions\Admin\JobDemand\JobDemandApplicationAction;
use App\Actions\Admin\JobDemand\StoreAction;
use App\Actions\Admin\JobPost\UpdateAction;
use App\DTOs\AdminJobDemandDTO;
use App\DTOs\JobPostDTO;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class JobDemandController extends Controller
{
    public function index(IndexAction $indexAction): Response
    {
        return $indexAction->execute();
    }

    public function create(CreateAction $createAction): Response
    {
        return $createAction->execute();
    }

    public function store(Request $request, StoreAction $storeAction): RedirectResponse
    {
        return $storeAction->execute(AdminJobDemandDTO::fromRequest($request));
    }

    public function edit(int $id, EditAction $editAction): Response
    {
        return $editAction->execute($id);
    }

    public function update(Request $request, int $id, UpdateAction $updateAction): RedirectResponse
    {
        return $updateAction->execute($id, JobPostDTO::fromRequest($request));
    }

    public function destroy(int $id, DeleteAction $deleteAction): RedirectResponse
    {
        return $deleteAction->execute($id);
    }

    public function jobDemandApplications(JobDemandApplicationAction $jobDemandApplicationAction): Response
    {
        return $jobDemandApplicationAction->execute();
    }
}
