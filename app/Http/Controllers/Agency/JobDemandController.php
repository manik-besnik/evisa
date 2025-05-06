<?php

namespace App\Http\Controllers\Agency;

use App\Actions\Agency\JobDemand\DeleteAction;
use App\Actions\Agency\JobDemand\IndexAction;
use App\Actions\Agency\JobDemand\StoreAction;
use App\DTOs\JobDemandDTO;
use App\Http\Controllers\Controller;
use App\Models\Location;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobDemandController extends Controller
{
    public function index(IndexAction $indexAction): \Inertia\Response
    {
        return $indexAction->execute();
    }

    public function create(): \Inertia\Response
    {
        return Inertia::render('Agency/JobDemandCreate',[
            'locations' => Location::query()->get()
        ]);
    }

    public function store(Request $request, StoreAction $storeAction): \Illuminate\Http\RedirectResponse
    {
        return $storeAction->execute(JobDemandDTO::fromRequest($request));
    }

    public function destroy(int $id, DeleteAction $deleteAction): \Illuminate\Http\RedirectResponse
    {
        return $deleteAction->execute($id);
    }
}
