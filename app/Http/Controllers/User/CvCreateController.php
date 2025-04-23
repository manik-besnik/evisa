<?php

namespace App\Http\Controllers\User;

use App\Actions\User\CvCreate\CreateAction;
use App\Actions\User\CvCreate\IndexAction;
use App\Actions\User\CvCreate\StoreAction;
use App\DTOs\CVDTO;
use App\Http\Controllers\Controller;
use App\Models\UserCV;
use App\Models\VisaApply;
use Barryvdh\DomPDF\Facade\Pdf as DomPDF;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class CvCreateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexAction $indexAction): \Inertia\Response|RedirectResponse
    {
        return $indexAction->execute();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(CreateAction $createAction): \Inertia\Response|RedirectResponse
    {
        return $createAction->execute();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, StoreAction $storeAction)
    {
        return $storeAction->execute(CVDTO::fromRequest($request));
    }

    /**
     * Display the specified resource.
     */
    public function show(VisaApply $visaApply)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(VisaApply $visaApply)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, VisaApply $visaApply)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(VisaApply $visaApply)
    {
        //
    }


    public function download()
    {
        $type = request()->input('type');

        $cv = UserCv::query()->with(['country'])->where('user_id', auth()->id())->firstOrFail();

        if ($type === '1') {
            $pdf = DomPDF::loadView('pdfs.single-column-cv', compact('cv'));

            $pdf->setPaper('a4', );

            return $pdf->download("cv" . $cv->name . ".pdf");
        }


        $pdf = DomPDF::loadView('pdfs.test', compact('cv'));

        $pdf->setPaper('a4', );

        return $pdf->download("cv" . $cv->name . ".pdf");


    }
}
