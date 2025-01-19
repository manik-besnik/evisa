<?php

namespace App\Http\Controllers\User;

use App\Actions\User\Dashboard\IndexAction;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index(IndexAction $indexAction): \Inertia\Response
    {
        return $indexAction->execute();

    }
}
