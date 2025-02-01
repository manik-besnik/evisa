<?php

namespace App\Http\Controllers\Admin;

use App\Actions\Admin\User\IndexAction;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function index(IndexAction $indexAction): \Inertia\Response
    {
        return $indexAction->execute();
    }
}
