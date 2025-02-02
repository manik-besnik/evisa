<?php

namespace App\Http\Controllers\Agency;

use App\Actions\Agency\Dashboard\IndexAction;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(IndexAction $indexAction): \Inertia\Response
    {
        return $indexAction->execute();
    }

    public function accountNotApproved(): \Inertia\Response
    {
        return Inertia::render('Agency/AccountNotApproved');
    }
}
