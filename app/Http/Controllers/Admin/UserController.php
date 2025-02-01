<?php

namespace App\Http\Controllers\Admin;

use App\Actions\Admin\User\AddUserAction;
use App\Actions\Admin\User\IndexAction;
use App\DTOs\AddUserDTO;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(IndexAction $indexAction): \Inertia\Response
    {
        return $indexAction->execute();
    }

    public function add(Request $request, AddUserAction $addUserAction)
    {
        return $addUserAction->execute(AddUserDTO::fromRequest($request));
    }
}
