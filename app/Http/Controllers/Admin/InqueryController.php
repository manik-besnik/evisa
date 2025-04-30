<?php

namespace App\Http\Controllers\Admin;


use App\Actions\Admin\Cv\DeleteAction;
use App\Actions\Admin\Inquery\IndexAction;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Models\Inquery;

class InqueryController extends Controller
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

    public function downloadPdf($id)
    {
        $inquery = Inquery::findOrFail($id);
        $pdf = Pdf::loadView('pdfs.inquery', compact('inquery'));



        return $pdf->download('inquery_' . $inquery->id . '.pdf');
    }
}
