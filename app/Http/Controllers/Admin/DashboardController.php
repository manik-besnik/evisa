<?php

namespace App\Http\Controllers\Admin;

use App\Actions\Admin\Dashboard\IndexAction;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index(IndexAction $indexAction): \Inertia\Response
    {
        return $indexAction->execute();

    }
}
