<?php

namespace App\Http\Controllers\Admin;

use App\Actions\Admin\JobPost\CreateAction;
use App\Actions\Admin\JobPost\DeleteAction;
use App\Actions\Admin\JobPost\EditAction;
use App\Actions\Admin\JobPost\IndexAction;
use App\Actions\Admin\JobPost\JobApplicationAction;
use App\Actions\Admin\JobPost\StoreAction;
use App\Actions\Admin\JobPost\UpdateAction;
use App\DTOs\JobPostDTO;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class JobPostController extends Controller
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
        return $storeAction->execute(JobPostDTO::fromRequest($request));
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

    public function applications(JobApplicationAction $jobApplicationAction): Response
    {
        return $jobApplicationAction->execute();
    }
}
