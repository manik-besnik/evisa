<?php

namespace App\DTOs;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;

class MultiJobDemandDTO
{
    public UploadedFile|string|null $thumbnail;
    public string $companyName;
    public string $contactPerson;
    public string $phoneNo;
    public string|null $whatsappNo;
    public string|null $email;
    public string|null $currentAddress;
    public string|null $city;
    public string|null $area;
    public string|null $jobLocation;
    public string|int|null $locationId;
    public string|null $workingHours;
    public string|null $visaValidity;
    public string|null $medicalInsurance;
    public string|null $food;
    public string|null $transport;
    public string|null $accommodation;
    public string|null $vacationBenefits;
    public string|null $education;
    public string|null $ageLimits;
    public string|null $note;
    public string|null $companyActivities;

    public array $demandItems = [];

    public static function fromRequest(Request $request): MultiJobDemandDTO
    {
        $request->validate([
            'region' => 'required|integer',
            'location_id' => 'nullable|required_if:region,1|exists:locations,id',
            'job_location' => 'nullable|required_if:region,2|string|max:255',
            'thumbnail' => 'nullable|file|mimes:jpg,jpeg,png,webp,svg|max:2048',
            'company_name' => 'required|string|max:255',
            'contact_person' => 'required|string|max:255',
            'phone_no' => 'required|string|max:255',
            'whatsapp_no' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'current_address' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'area' => 'nullable|string|max:255',
            'working_hours' => 'nullable|string|max:255',
            'visa_validity' => 'nullable|string|max:255',
            'medical_insurance' => 'nullable|string|max:255',
            'food' => 'nullable|string|max:255',
            'transport' => 'nullable|string|max:255',
            'accommodation' => 'nullable|string|max:255',
            'vacation_benefits' => 'nullable|string|max:255',
            'education' => 'nullable|string|max:255',
            'age_limits' => 'nullable|string|max:255',
            'note' => 'nullable|string|max:255',
            'company_activities' => 'nullable|string|max:255',
            'demand_items' => 'required|array',
            'demand_items.*.type_of_work' => 'required|string|max:255',
            'demand_items.*.salary' => 'required|string',
            'demand_items.*.worker_quantity' => 'required|integer|min:1',
            'demand_items.*.note' => 'required|string|max:255',
        ], [
            'location_id.required' => 'Job Location is required.',
            'location_id.exists' => 'Job Location does not exist.',
            'demand_items.*.type_of_work.required' => 'Job Demand Category is required.',
            'demand_items.*.salary.required' => 'Salary Range is required.',
            'demand_items.*.worker_quantity.required' => 'Worker Quantity is required.',
        ]);

        $instance = new self;

        $instance->thumbnail = $request->hasFile('thumbnail') ? $request->file('thumbnail') : $request->input('thumbnail');
        $instance->companyName = $request->input('company_name');
        $instance->contactPerson = $request->input('contact_person');
        $instance->phoneNo = $request->input('phone_no');
        $instance->whatsappNo = $request->input('whatsapp_no');
        $instance->email = $request->input('email');
        $instance->currentAddress = $request->input('current_address');
        $instance->city = $request->input('city');
        $instance->jobLocation = $request->input('job_location');
        $instance->locationId = $request->input('location_id');
        $instance->workingHours = $request->input('working_hours');
        $instance->visaValidity = $request->input('visa_validity');
        $instance->medicalInsurance = $request->input('medical_insurance');
        $instance->food = $request->input('food');
        $instance->transport = $request->input('transport');
        $instance->accommodation = $request->input('accommodation');
        $instance->vacationBenefits = $request->input('vacation_benefits');
        $instance->education = $request->input('education');
        $instance->ageLimits = $request->input('age_limits');
        $instance->note = $request->input('note');
        $instance->companyActivities = $request->input('company_activities');
        $instance->area = $request->input('area');
        $instance->demandItems = $request->input('demand_items');

        return $instance;
    }
}
