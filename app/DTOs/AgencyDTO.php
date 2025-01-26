<?php

namespace App\DTOs;

use Illuminate\Http\Request;

class AgencyDTO
{
    public string $companyName;
    public string $personName;
    public string $profession;
    public string $phone;
    public string $email;
    public int $prefferLanguage;
    public int $nationality;
    public int $livingCountry;
    public string $city;
    public string $eidNo;
    public string $passportNo;
    public string $uidNo;
    public string $bankDetails;
    public string $nomineeName;
    public string $nomineePassport;


    public static function fromRequest(Request $request): AgencyDTO
    {
        $request->validate([
            'company_name' => 'required|string|max:255',
            'person_name' => 'required|string|max:255',
            'profession' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|max:255|unique:users,email',
            'preffer_language' => 'required|integer|exists:languages,id',
            'nationality' => 'required|integer|exists:countries,id',
            'living_country' => 'required|integer|exists:countries,id',
            'city' => 'required|string|max:255',
            'eid_no' => 'nullable|string|max:255',
            'passport_no' => 'nullable|string|max:255',
            'uid_no' => 'nullable|string|max:255',
            'bank_details' => 'nullable|string|max:255',
            'nominee_name' => 'required|string|max:255',
            'nominee_passport' => 'nullable|string|max:255',
        ], [
            'company_name.required' => 'The company name is required.',
            'person_name.required' => 'The person name is required.',
            'profession.required' => 'The profession is required.',
            'phone.required' => 'The phone number is required.',
            'email.required' => 'The email address is required.',
            'email.email' => 'The email address must be a valid email.',
            'email.unique' => 'The email has already been taken.',
            'preffer_language.required' => 'The preferred language is required.',
            'preffer_language.integer' => 'The preferred language must be a valid integer.',
            'preffer_language.exists' => 'The selected preferred language is invalid.',
            'nationality.required' => 'The nationality is required.',
            'nationality.integer' => 'The nationality must be a valid integer.',
            'nationality.exists' => 'The selected nationality is invalid.',
            'living_country.required' => 'The living country is required.',
            'living_country.integer' => 'The living country must be a valid integer.',
            'living_country.exists' => 'The selected living country is invalid.',
            'city.required' => 'The city is required.',
            'eid_no.required' => 'The EID number is required.',
            'passport_no.required' => 'The passport number is required.',
            'uid_no.required' => 'The UID number is required.',
            'bank_details.required' => 'The bank account details are required.',
            'nominee_name.required' => 'The nominee name is required.',
            'nominee_passport.required' => 'The nominee passport is required.',
        ]);

        $instance = new self;

        $instance->companyName = $request->input('company_name');
        $instance->personName = $request->input('person_name');
        $instance->profession = $request->input('profession');
        $instance->email = $request->input('email');
        $instance->phone = $request->input('phone');
        $instance->prefferLanguage = $request->input('preffer_language');
        $instance->nationality = $request->input('nationality');
        $instance->livingCountry = $request->input('living_country');
        $instance->city = $request->input('city');
        $instance->eidNo = $request->input('eid_no');
        $instance->passportNo = $request->input('passport_no');
        $instance->uidNo = $request->input('uid_no');
        $instance->bankDetails = $request->input('bank_details');
        $instance->nomineeName = $request->input('nominee_name');
        $instance->nomineePassport = $request->input('nominee_passport');


        return $instance;
    }


}
