<?php

namespace App\Http\Controllers\Admin;

use App\Actions\Admin\Admin\DeleteAction;
use App\Actions\Admin\Admin\IndexAction;
use App\Actions\Admin\Admin\StoreAction;
use App\Actions\Admin\Admin\UpdateAction;
use App\DTOs\UserDTO;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexAction $indexAction): \Inertia\Response
    {
        return $indexAction->execute();
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, StoreAction $storeAction)
    {
        return $storeAction->execute(UserDTO::fromRequest($request));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id, UpdateAction $updateAction)
    {
        $user = [
            'name' => $request->input('name'),
            'role' => $request->input('role'),
            'role_id' => $request->input('role_id'),
            'email' => $request->input('email'),
        ];

        return $updateAction->execute($id, UserDTO::fromArray($user));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id, DeleteAction $deleteAction)
    {
        return $deleteAction->execute($id);
    }
}
