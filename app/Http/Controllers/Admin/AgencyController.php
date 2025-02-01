<?php

namespace App\Http\Controllers\Admin;

use App\Actions\Admin\Agency\ApproveAction;
use App\Actions\Admin\Agency\IndexAction;
use App\Actions\Admin\Agency\ShowAction;
use App\Http\Controllers\Controller;

class AgencyController extends Controller
{
    public function index(IndexAction $indexAction): \Inertia\Response
    {
        return $indexAction->execute();
    }

    public function show(int $id, ShowAction $showAction): \Inertia\Response
    {
        return $showAction->execute($id);
    }

    public function approve(int $id, ApproveAction $approveAction): \Illuminate\Http\RedirectResponse
    {
        return $approveAction->execute($id);
    }
}
