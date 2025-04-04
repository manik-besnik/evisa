<?php

namespace App\Http\Controllers\Agency;

use App\Actions\Agency\User\CreateAction;
use App\Actions\Agency\User\IndexAction;
use App\Actions\Agency\User\StoreAction;
use App\DTOs\AddUserDTO;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class UserController extends Controller
{
    public function index(IndexAction $indexAction): Response
    {
        return $indexAction->execute();
    }

    public function create(CreateAction $createAction): Response
    {
        return $createAction->execute();
    }

    public function store(Request $request, StoreAction $addUserAction): RedirectResponse
    {
        return $addUserAction->execute(AddUserDTO::fromRequest($request));
    }
}
