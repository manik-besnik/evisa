<?php

namespace App\DTOs;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;

class JobDemandDTO
{
    public UploadedFile|string|null $thumbnail;
    public string $companyName;
    public string $contactPerson;
    public string $phoneNo;
    public string $whatsappNo;
    public string $email;
    public string $currentAddress;
    public string $city;
    public string $jobLocation;
    public string $typeOfWork;
    public string $salary;
    public string $workingHours;
    public string $visaValidity;
    public string $medicalInsurance;
    public string $food;
    public string $transport;
    public string $accommodation;
    public string $vacationBenefits;
    public string $education;
    public string $ageLimits;
    public string $note;
    public string $companyActivities;
    public string $workerQuantity;
    public string $area;

    public static function fromRequest(Request $request): JobDemandDTO
    {
        $request->validate([
            'thumbnail' => 'nullable|file|mimes:jpg,jpeg,png|max:2048',
            'company_name' => 'required|string|max:255',
            'contact_person' => 'required|string|max:255',
            'phone_no' => 'required|string|max:255',
            'whatsapp_no' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'current_address' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'job_location' => 'required|string|max:255',
            'type_of_work' => 'required|string|max:255',
            'salary' => 'required|string|max:255',
            'working_hours' => 'required|string|max:255',
            'visa_validity' => 'required|string|max:255',
            'medical_insurance' => 'required|string|max:255',
            'food' => 'required|string|max:255',
            'transport' => 'required|string|max:255',
            'accommodation' => 'required|string|max:255',
            'vacation_benefits' => 'required|string|max:255',
            'education' => 'required|string|max:255',
            'age_limits' => 'required|string|max:255',
            'note' => 'required|string|max:255',
            'company_activities' => 'required|string|max:255',
            'worker_quantity' => 'required|string|max:255',
            'area' => 'required|string|max:255',
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
        $instance->typeOfWork = $request->input('type_of_work');
        $instance->salary = $request->input('salary');
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
        $instance->workerQuantity = $request->input('worker_quantity');
        $instance->area = $request->input('area');

        return $instance;
    }
}
