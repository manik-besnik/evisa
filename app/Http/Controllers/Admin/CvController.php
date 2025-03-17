<?php

namespace App\Http\Controllers\Admin;


use App\Actions\Admin\Cv\IndexAction;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class CvController extends Controller
{
    public function index(IndexAction $indexAction): Response
    {
        return $indexAction->execute();
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
    }

    public function edit()
    {
    }

    public function update(Request $request)
    {
    }

    public function destroy()
    {
    }

}
