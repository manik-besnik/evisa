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
use Illuminate\Support\Str;
use Spatie\Browsershot\Exceptions\CouldNotTakeBrowsershot;
use Spatie\LaravelPdf\Enums\Format;
use function Spatie\LaravelPdf\Support\pdf;
use Spatie\LaravelPdf\Enums\Unit;
use Spatie\Browsershot\Browsershot;
use Illuminate\Support\Facades\Response;

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

    /**
     * @throws CouldNotTakeBrowsershot
     */
    public function download()
    {
        $type = request()->input('type');

        $cv = UserCv::query()->with(['country'])->where('user_id', auth()->id())->firstOrFail();

        if ($type === '1') {
            $pdf = DomPDF::loadView('pdfs.single-column-cv', compact('cv'));

            $pdf->setPaper('a4', 'portrait');

            return $pdf->download("cv" . $cv->name . ".pdf");
//            return pdf()
//                ->format(Format::A4)
//                ->margins(.5, .5, .5, .5, Unit::Inch)
//                ->view('pdfs.single-column-cv', compact('cv'))
//                ->name("cv" . $cv->name . ".pdf")->download();
        }

        $pdf = DomPDF::loadView('pdfs.test', compact('cv'));

        $pdf->setPaper('a4', 'portrait');

        return $pdf->download("cv" . $cv->name . ".pdf");

//
//        return pdf()
//            ->format(Format::A4)
//            ->margins(0.5, 0.5, 0.5, 0.5, Unit::Inch)
//            ->withBrowsershot(function (Browsershot $browsershot) {
//                $browsershot
//                    ->setChromePath('/usr/bin/chromium-browser')
//                    ->setNodeBinary('/usr/bin/node')
//                    ->setNpmBinary('/usr/bin/npm')
//                    ->timeout(300) // 5 minutes timeout
//                    ->noSandbox()
//                    ->deviceScaleFactor(1) // Reduces render complexity
//                    ->addChromiumArguments([
//                        '--disable-gpu',
//                        '--disable-dev-shm-usage', // Critical for Docker/Limited RAM
//                        '--single-process', // Reduces memory usage
//                        '--no-zygote',
//                        '--disable-software-rasterizer',
//                        '--disable-extensions',
//                        '--disable-background-networking',
//                        '--disable-default-apps',
//                        '--disable-translate',
//                        '--disable-setuid-sandbox',
//                        '--headless=new' // New headless mode (faster)
//                    ]);
//            })
//            ->view('pdfs.two-column-cv', compact('cv'))
//            ->name("cv-{$cv->name}.pdf")
//            ->download();

//        $html = view('pdfs.two-column-cv', compact('cv'))->render();
//
//        // Generate a temporary path
//        $path = storage_path('app/public/cv_' . Str::random(10) . '.pdf');
//
//        // Generate the PDF
//        Browsershot::html($html)
//            ->setOption('executablePath', '/usr/bin/chromium-browser')
//            ->format('A4')
//            ->margins(0.5,0.5,0.5,0.5,'inch')
//            ->showBackground()
//            ->save($path); // Save instead of pdf()
//
//        // Return as downloadable response
//        return response()->download($path)->deleteFileAfterSend(true);

    }
}
