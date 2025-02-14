<?php

namespace App\Http\Controllers\Api;

use App\DTOs\JobApplyDTO;
use App\Http\Controllers\Controller;
use App\Models\JobPost;
use App\Supports\ApiResponse;
use App\Supports\JobApplyAction;
use App\Supports\JobApplyList;
use Illuminate\Http\Request;

class JobApplyController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
        $jobApplyList = JobApplyList::execute();

        return ApiResponse::success('Job Applied List', ['job_applies_list' => $jobApplyList]);
    }

    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        try {

            $apply = JobApplyAction::execute(auth()->id(), JobApplyDTO::fromRequest($request));

            if ($apply) {
                return ApiResponse::success('Your application submitted', ['job_apply' => $apply]);
            }

            return ApiResponse::error("Application Submit Failed");

        } catch (\Exception $exception) {
            return ApiResponse::error($exception->getMessage());
        }
    }

    public function availableJobs(): \Illuminate\Http\JsonResponse
    {

        $jobPoss = JobPost::query()
            ->select(['id', 'title'])
            ->whereDate('last_apply_date', '>=', now()->format('Y-m-d'))
            ->get();

        return ApiResponse::success('Job post list', ['job_posts' => $jobPoss]);

    }
}
