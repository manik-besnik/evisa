<?php

namespace App\Http\Controllers\Admin;

use App\Actions\Admin\Role\IndexAction;
use App\Actions\Admin\Role\StoreAction;
use App\Actions\Admin\Role\UpdateAction;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index(IndexAction $indexAction): \Inertia\Response
    {
        return $indexAction->execute();
    }

    public function store(Request $request, StoreAction $storeAction)
    {
        return $storeAction->execute($request);
    }

    public function update(Request $request, int $id, UpdateAction $updateAction)
    {
        return $updateAction->execute($id, $request);
    }
}
