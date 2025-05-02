<?php

namespace App\Http\Controllers\Admin;


use App\Actions\Admin\Cv\DeleteAction;
use App\Actions\Admin\Cv\IndexAction;
use App\Actions\Admin\Cv\DownloadAction;

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

    public function destroy(int $id, DeleteAction $deleteAction): RedirectResponse
    {
        return $deleteAction->execute($id);
    }

    public function download(int $id, DownloadAction $downloadAction)
    {
        return $downloadAction->execute($id);
    }

}
