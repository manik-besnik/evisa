<?php

namespace App\Http\Controllers\Admin;

use App\Actions\Admin\Agency\IndexAction;
use App\Http\Controllers\Controller;

class AgencyController extends Controller
{
    public function index(IndexAction $indexAction): \Inertia\Response
    {
        return $indexAction->execute();
    }
}
