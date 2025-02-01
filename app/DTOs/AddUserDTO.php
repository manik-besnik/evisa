<?php

namespace App\DTOs;

use Illuminate\Http\Request;

class AddUserDTO
{
    public string $name;
    public string $username;
    public string $password;
    public string $profession;
    public string $phone;
    public string $email;
    public int $prefferLanguage;
    public int $nationality;
    public int $livingCountry;
    public string $city;


    public static function fromRequest(Request $request): AddUserDTO
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'password' => 'required|string|min:8|max:255',
            'profession' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'preffer_language' => 'required|integer|exists:languages,id',
            'nationality' => 'required|integer|exists:countries,id',
            'living_country' => 'required|integer|exists:countries,id',
            'city' => 'required|string|max:255',
        ], [
            'name.required' => 'The person name is required.',
            'profession.required' => 'The profession is required.',
            'phone.required' => 'The phone number is required.',
            'email.required' => 'The email address is required.',
            'email.email' => 'The email address must be a valid email.',
            'email.unique' => 'The email has already been taken.',
            'preffer_language.required' => 'The preferred language is required.',
            'preffer_language.exists' => 'The selected preferred language is invalid.',
            'nationality.required' => 'The nationality is required.',
            'nationality.exists' => 'The selected nationality is invalid.',
            'living_country.required' => 'The living country is required.',
            'living_country.exists' => 'The selected living country is invalid.',
            'city.required' => 'The city is required.',
        ]);

        $instance = new self;

        $instance->name = $request->input('name');
        $instance->password = $request->input('password');
        $instance->username = $request->input('username');
        $instance->profession = $request->input('profession');
        $instance->email = $request->input('email');
        $instance->phone = $request->input('phone');
        $instance->prefferLanguage = $request->input('preffer_language');
        $instance->nationality = $request->input('nationality');
        $instance->livingCountry = $request->input('living_country');
        $instance->city = $request->input('city');

        return $instance;
    }


}
