<?php

namespace App\Http\Controllers\User;

use App\Actions\User\JobPost\JobAction;
use App\Actions\User\JobPost\JobDirectoryAction;
use App\Actions\User\JobPost\JobViewAction;
use App\Actions\User\JobPost\JobDetailsAction;
use App\Actions\User\JobPost\IndexAction;
use App\Actions\User\JobPost\ShowAction;
use App\DTOs\JobApplyDTO;
use App\Http\Controllers\Controller;
use App\Models\JobApply;
use App\Models\JobDemand;
use App\Models\JobPost;
use App\Models\Language;
use App\Models\Location;
use App\Supports\JobApplyAction;
use App\Supports\JobApplyList;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf as DomPDF;

class JobPostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexAction $indexAction): \Inertia\Response
    {
        return $indexAction->execute();
    }

    public function job(JobAction $jobAction): \Inertia\Response
    {
        return $jobAction->execute();
    }

    public function jobDirectory(JobDirectoryAction $jobDirectoryAction): \Inertia\Response
    {
        return $jobDirectoryAction->execute();
    }

    public function jobView(JobViewAction $jobViewAction): \Inertia\Response
    {
        return $jobViewAction->execute();
    }

    public function jobsDetails(int $id, JobDetailsAction $jobDetailsAction): \Inertia\Response
    {
        return $jobDetailsAction->execute($id);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): \Inertia\Response
    {
        $applyFor = null;

        if (request()->has('job_demand_id')) {
            $applyFor = JobDemand::query()
                ->select(['id', 'type_of_work'])
                ->findOrFail(request()->input('job_demand_id'));
        }
        return Inertia::render('JobApply', [
            'apply_for' => $applyFor,
            'languages' => Language::query()->get(),
            'locations' => Location::query()->select(['id', 'name'])->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {

        if ($request->input('job_demand_id')) {
            /** @var JobApply|null $jobApplied */
            $jobApplied = JobApply::query()
                ->where('user_id', auth()->id())
                ->where('job_demand_id', $request->input('job_demand_id'))
                ->first();

            if ($jobApplied) {
                return redirect()->back()->with('error', "Already applied this job");
            }
        }

        $result = JobApplyAction::execute(auth()->id(), JobApplyDTO::fromRequest($request));

        if ($result instanceof \Exception) {
            return redirect()->back()->withErrors(['message' => $result->getMessage()]);
        }


        return redirect()->back()->with('success', 'Your application submitted');

    }

    /**
     * Display the specified resource.
     */
    public function show(int $id, ShowAction $showAction): \Inertia\Response
    {
        return $showAction->execute($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(JobPost $jobPost)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, JobPost $jobPost)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(JobPost $jobPost)
    {
        //
    }

    public function jobApplyList(): \Inertia\Response
    {
        $jobApplyList = JobApplyList::execute();
        return Inertia::render('JobApplyList', ['job_apply_list' => $jobApplyList]);
    }

    public function generatePdf($id)
    {


        // If you're using hardcoded data like in your React component,

        $job = (object)[
            'id' => 1,
            'title' => "Security",
            'salary' => "AED 2200",
            'salaryRange' => "1850-2500 AED",
            'code' => "0000003",
            'location' => "Dubai",
            'image' => "images/secu.png",
            'category' => "Ready Job",
            'visaValidity' => "02 years",
            'accommodation' => "The Company",
            'transport' => "The Company",
            'food' => "Self",
            'medicalInsurance' => "As per UAE labour laws",
            'workingHours' => "8 Hours (As per Company Policy)",
            'vacationBenefits' => "As per UAE labour laws",
            'ageLimits' => "20-32",
            'inDemandWorkers' => "50 People",
            'education' => "Must have ability to read and write English",
            'companyActivities' => "Established security service company",
            'contactNumber' => "+971 528260909",
            'alternateNumbers' => "0508074795, 0501289360",
            'applicationRequirements' => "passport, white background photo, clear visit visa copy or cancellation copy and to be in our format."
        ];


        $pdf = DomPDF::loadView('pdfs.jobs', compact('job'));

        $pdf->setPaper('a4', 'portrait');

        return $pdf->download("job_" . $job->code . ".pdf");
    }

    public function jobApplyDownload(int $id): \Inertia\Response
    {
        $data = JobApply::query()
            ->with([
                'jobDemand:id,type_of_work,company_id,location_id,job_location,salary',
                'jobDemand.company:id,name',
                'jobDemand.location:id,name'
            ])
            ->where('user_id', auth()->id())
            ->findOrFail($id);

        return Inertia::render('JobApply/Download', ['data' => $data]);
    }
}
