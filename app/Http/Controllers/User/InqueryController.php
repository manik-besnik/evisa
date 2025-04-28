<?php

namespace App\Http\Controllers\User;

use App\Actions\User\Inquery\CreateAction;
use App\Actions\User\Inquery\IndexAction;
use App\DTOs\VisaApplyDTO;
use App\Http\Controllers\Controller;
use App\Models\VisaApply;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Inquery;

class InqueryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexAction $indexAction): \Inertia\Response
    {
        return $indexAction->execute();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(CreateAction $createAction): \Inertia\Response
    {
        return $createAction->execute();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        // Validate the request data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'visa_type' => 'required',
            'location' => 'required',
            'phone' => 'required|string|max:20',
            'phone_country' => 'required|string|max:10',
            'whatsapp' => 'nullable|string|max:20',
            'whatsapp_country' => 'nullable|string|max:10',
            'message' => 'nullable|string',
            'documents' => 'nullable|array',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        // Process documents if any
        $processedDocuments = [];

        if ($request->has('documents') && is_array($request->documents)) {
            foreach ($request->documents as $type => $documentData) {
                if (isset($documentData['file']) && $documentData['file']) {
                    $file = $documentData['file'];

                    // Generate a unique filename
                    $fileName = uniqid() . '-' . time() . '.' . $file->getClientOriginalExtension();

                    // Store the file
                    $file->move(public_path('uploads'), $fileName);

                    // Add to processed documents array
                    $processedDocuments[] = [
                        'url' => url('/uploads/' . $fileName),
                        'name' => $documentData['name'] ?? 'Document'
                    ];
                }
            }
        }

        // Create a new query record with documents as JSON
        $query = Inquery::create([
            'name' => $request->name,
            'email' => $request->email,
            'visa_type' => $request->visa_type,
            'location' => $request->location,
            'phone' => $request->phone,
            'phone_country' => $request->phone_country,
            'whatsapp' => $request->whatsapp,
            'whatsapp_country' => $request->whatsapp_country,
            'message' => $request->message,
            'documents' => $processedDocuments, // This will be stored as JSON
        ]);

        return redirect()->back()->with('success', 'Your query has been submitted successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id, )
    {
      
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


    public function visa(VisaAction $visaAction): \Inertia\Response
    {
        return $visaAction->execute();
    }
}
