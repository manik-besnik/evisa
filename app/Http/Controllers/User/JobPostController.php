<?php

namespace App\Http\Controllers\User;

use App\Actions\User\JobPost\JobAction;
use App\Actions\User\JobPost\JobDirectoryAction;
use App\Actions\User\JobPost\IndexAction;
use App\Actions\User\JobPost\ShowAction;
use App\DTOs\JobApplyDTO;
use App\Http\Controllers\Controller;
use App\Models\JobApply;
use App\Models\JobPost;
use App\Models\Language;
use App\Supports\JobApplyAction;
use App\Supports\JobApplyList;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
    /**
     * Show the form for creating a new resource.
     */
    public function create(): \Inertia\Response
    {
        return Inertia::render('JobApply', [
            'job_posts' => JobPost::query()->select(['id', 'title'])
                ->whereDate('last_apply_date', '>=', now()->format('Y-m-d'))
                ->get(),
            'languages' => Language::query()->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        /** @var JobApply|null $jobApplied */
        $jobApplied = JobApply::query()->where('user_id', auth()->id())->where('job_post_id', $request->input('job_post_id'))->first();

        if ($jobApplied) {
            return redirect()->back()->with('error', "Already applied this job");
        }
        try {

            $apply = JobApplyAction::execute(auth()->id(), JobApplyDTO::fromRequest($request));

            if ($apply) {
                return redirect()->back()->with('success', 'Your application submitted');
            }

            return redirect()->back()->withErrors(['message' => "Application Submit Failed"]);

        } catch (\Exception $exception) {
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
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
}
