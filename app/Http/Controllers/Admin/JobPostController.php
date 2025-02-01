<?php

namespace App\Http\Controllers\Admin;

use App\Actions\Admin\JobPost\CreateAction;
use App\Actions\Admin\JobPost\DeleteAction;
use App\Actions\Admin\JobPost\EditAction;
use App\Actions\Admin\JobPost\IndexAction;
use App\Actions\Admin\JobPost\StoreAction;
use App\Actions\Admin\JobPost\UpdateAction;
use App\DTOs\JobPostDTO;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class JobPostController extends Controller
{
    public function index(IndexAction $indexAction): \Inertia\Response
    {
        return $indexAction->execute();
    }

    public function create(CreateAction $createAction): \Inertia\Response
    {
        return $createAction->execute();
    }

    public function store(Request $request, StoreAction $storeAction): \Illuminate\Http\RedirectResponse
    {
        return $storeAction->execute(JobPostDTO::fromRequest($request));
    }

    public function edit(int $id, EditAction $editAction): \Inertia\Response
    {
        return $editAction->execute($id);
    }

    public function update(Request $request, int $id, UpdateAction $updateAction): \Illuminate\Http\RedirectResponse
    {
        return $updateAction->execute($id, JobPostDTO::fromRequest($request));
    }

    public function destroy(int $id, DeleteAction $deleteAction): \Illuminate\Http\RedirectResponse
    {
        return $deleteAction->execute($id);
    }
}
