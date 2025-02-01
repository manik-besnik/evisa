<?php

namespace App\Http\Controllers\Admin;

use App\Actions\Admin\JobPost\CreateAction;
use App\Actions\Admin\JobPost\IndexAction;
use App\Http\Controllers\Controller;

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
}
