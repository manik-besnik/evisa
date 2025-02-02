<?php

namespace App\DTOs;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;

class JobPostDTO
{
    public int $type;
    public UploadedFile|string|null $thumbnail;
    public string $title;
    public string $company;
    public string $salaryRange;
    public string $location;
    public string $description;
    public string $lastApplyDate;

    public static function fromRequest(Request $request): JobPostDTO
    {
        $request->validate([
            'type' => 'required|integer',
            'thumbnail' => 'nullable|file|mimes:jpg,jpeg,png|max:2048',
            'title' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'salary_range' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'description' => 'required|string',
            'last_apply_date' => 'required|date',
        ], [
            'type.required' => 'The job type is required.',
            'thumbnail.required' => 'The thumbnail is required.',
            'title.required' => 'The job title is required.',
            'company.required' => 'The company name is required.',
            'salary_range.required' => 'The salary range is required.',
            'location.required' => 'The location is required.',
            'description.required' => 'The description is required.',
            'last_apply_date.required' => 'The last apply date is required.',
            'last_apply_date.date' => 'The last apply date must be a valid date.',
        ]);

        $instance = new self;

        $instance->type = (int)$request->input('type');
        $instance->thumbnail = $request->hasFile('thumbnail') ? $request->file('thumbnail') : $request->input('thumbnail');
        $instance->title = $request->input('title');
        $instance->company = $request->input('company');
        $instance->salaryRange = $request->input('salary_range');
        $instance->location = $request->input('location');
        $instance->description = $request->input('description');
        $instance->lastApplyDate = $request->input('last_apply_date');

        return $instance;
    }
}
