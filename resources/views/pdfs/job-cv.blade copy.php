@php
use Carbon\Carbon;
$genders = [
'1' => 'Male',
'2' => 'Female',
'3' => 'Others',
];

$maritalStatuses = [
'1' => 'Single',
'2' => 'Married',
'3' => 'Divorced',
];

$religions = [
'1' =>'Sunni Muslim',
'2' =>'Shiite Muslim',
'3' =>'Christian',
'4' =>'Hindu',
'5' => 'Sikh',
'6' =>'Buddhist',
];

@endphp

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Application Form - {{$cv->name}}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            box-sizing: border-box;
            line-height: 1.4;
            font-size: 12px;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            border: 2px solid #333;
            background: white;
        }

        /* Header Section */
        .header {
            display: flex;
            background: #fff;
            border-bottom: 2px solid #333;
        }

        .header-left {
            flex: 1;
            display: flex;
            align-items: stretch;
        }

        .job-application-label {
            background: #dc2626;
            color: white;
            padding: 20px 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-width: 120px;
            text-align: center;
        }

        .job-application-label .job-text {
            font-size: 16px;
            font-weight: bold;
            line-height: 1.2;
            margin-bottom: 5px;
        }

        .job-application-label .application-text {
            font-size: 14px;
            font-weight: bold;
            line-height: 1.2;
            margin-bottom: 5px;
        }

        .job-application-label .form-text {
            font-size: 12px;
            background: rgba(255, 255, 255, 0.2);
            padding: 2px 8px;
            border-radius: 2px;
        }

        .personal-info {
            flex: 1;
            padding: 15px 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .personal-info h1 {
            font-size: 18px;
            font-weight: bold;
            margin: 0 0 8px 0;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .personal-info p {
            margin: 2px 0;
            font-size: 11px;
        }

        .photo-container {
            width: 120px;
            height: 140px;
            border-left: 1px solid #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f8f9fa;
        }

        .photo-container img {
            width: 100px;
            height: 120px;
            object-fit: cover;
            border: 1px solid #ddd;
        }

        /* Section Headers */
        .section-header {
            background: #f8f9fa;
            padding: 8px 15px;
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        /* Tables */
        .details-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 11px;
        }

        .details-table td {
            padding: 6px 15px;
            border-bottom: 1px solid #eee;
            vertical-align: top;
        }

        .details-table td:first-child {
            width: 25%;
            font-weight: 500;
        }

        .details-table td:nth-child(2) {
            width: 5%;
            text-align: center;
        }

        .details-table td:nth-child(3) {
            width: 35%;
        }

        .details-table td:nth-child(4) {
            width: 35%;
        }

        /* Two column layout for personal details */
        .two-column-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 11px;
        }

        .two-column-table td {
            padding: 6px 15px;
            border-bottom: 1px solid #eee;
            vertical-align: top;
        }

        .two-column-table .label {
            width: 20%;
            font-weight: 500;
        }

        .two-column-table .colon {
            width: 2%;
            text-align: center;
        }

        .two-column-table .value {
            width: 28%;
        }

        /* Education Table */
        .education-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 10px;
            margin-top: 5px;
        }

        .education-table th,
        .education-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        .education-table th {
            background: #f8f9fa;
            font-weight: bold;
        }

        /* Experience Table */
        .experience-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 10px;
            margin-top: 5px;
        }

        .experience-table th,
        .experience-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        .experience-table th {
            background: #f8f9fa;
            font-weight: bold;
        }

        /* Summary Section */
        .summary-section {
            background: #fff9c4;
            border: 1px solid #f59e0b;
            margin: 10px 15px;
            padding: 10px;
        }

        .summary-header {
            font-weight: bold;
            font-size: 11px;
            margin-bottom: 5px;
            color: #92400e;
        }

        .summary-text {
            font-size: 10px;
            line-height: 1.4;
        }

        /* Utility Classes */
        .text-uppercase {
            text-transform: uppercase;
        }

        .text-center {
            text-align: center;
        }

        .font-bold {
            font-weight: bold;
        }

        @media print {
            * {
                margin: 0 !important;
                padding: 0 !important;
            }

            html,
            body {
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
                height: 100% !important;
            }

            .header {
                page-break-inside: avoid;
            }
        }

        @page {
            margin: 0;
            padding: 0;
        }
        
    </style>
</head>

<body>
    <div class="container">
        <!-- Header Section -->
        <div class="header">
            <div class="header-left">
                <div class="job-application-label">
                    <div class="job-text">JOB</div>
                    <div class="application-text">APPLICATION</div>
                    <div class="form-text">FORM</div>
                </div>
                <div class="personal-info">
                    <h1>{{strtoupper($cv->name)}}</h1>
                    <p><strong>Mob:</strong> {{$cv->phone}}</p>
                    <p><strong>Email:</strong> {{$cv->email}}</p>
                    @if($cv->website)
                    <p><strong>Website:</strong> {{$cv->website}}</p>
                    @endif
                </div>
            </div>
            <div class="photo-container">
                <img src="{{ public_path(str_replace(url('/'), '', $cv->avatar)) }}" alt="Profile Photo">
            </div>
        </div>

        <!-- Personal Details Section -->
        <div class="section-header">
            PERSONAL DETAILS
        </div>
        <table class="two-column-table">
            <tr>
                <td class="label">Date Of Birth</td>
                <td class="colon">:</td>
                <td class="value">{{$cv->date_of_birth}}</td>
                <td class="label">Religion</td>
                <td class="colon">:</td>
                <td class="value">{{$religions[$cv->religion]}}</td>
            </tr>
            <tr>
                <td class="label">Gender</td>
                <td class="colon">:</td>
                <td class="value">{{$genders[$cv->gender]}}</td>
                <td class="label">Blood Group</td>
                <td class="colon">:</td>
                <td class="value">{{$cv->blood_group}}</td>
            </tr>
            <tr>
                <td class="label">Nationality</td>
                <td class="colon">:</td>
                <td class="value">{{$cv->country->nationality}}</td>
                <td class="label">Marital Status</td>
                <td class="colon">:</td>
                <td class="value">{{$maritalStatuses[$cv->marital_status]}}</td>
            </tr>
        </table>

        <!-- Address Section -->
        <table class="two-column-table">
            <tr>
                <td class="label">Current Address</td>
                <td class="colon">:</td>
                <td class="value">{{$cv->current_city}}, {{$cv->current_state}}</td>
                <td class="label"></td>
                <td class="colon"></td>
                <td class="value"></td>
            </tr>
            <tr>
                <td class="label">Permanent Address</td>
                <td class="colon">:</td>
                <td class="value">{{$cv->permanent_village}}, {{$cv->permanent_thana}}</td>
                <td class="label"></td>
                <td class="colon"></td>
                <td class="value"></td>
            </tr>
        </table>

        <!-- Passport & Visa Section -->
        @if($cv->passport_no)
        <table class="two-column-table">
            <tr>
                <td class="label">Passport No</td>
                <td class="colon">:</td>
                <td class="value">{{$cv->passport_no}}</td>
                <td class="label">Visa Status</td>
                <td class="colon">:</td>
                <td class="value">{{$cv->visa_status}}</td>
            </tr>
            <tr>
                <td class="label">Expiry Date</td>
                <td class="colon">:</td>
                <td class="value">{{$cv->passport_expiry}}</td>
                <td class="label">Visa Expiry</td>
                <td class="colon">:</td>
                <td class="value">{{$cv->visa_expiry}}</td>
            </tr>
        </table>
        @endif

        <!-- Education Details Section -->
        <div class="section-header">
            EDUCATION DETAILS
        </div>
        <table class="education-table">
            <thead>
                <tr>
                    <th>Certificate</th>
                    <th>Year</th>
                    <th>Board | University</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                @if($cv->educations)
                @php
                $educations = is_string($cv->educations) ? json_decode($cv->educations, true) : $cv->educations;
                @endphp
                @foreach($educations as $education)
                <tr>
                    <td>{{$education['qualification'] ?? '-'}}</td>
                    <td>{{$education['start_date'] ?? ''}} - {{$education['is_present'] ? 'Present' : $education['end_date']}}</td>
                    <td>{{$education['institute'] ?? ''}}</td>
                    <td>{{$education['result'] ?? ''}}</td>
                </tr>
                @endforeach
                @endif
            </tbody>
        </table>

        <!-- Skills Section -->
        @if($cv->computer_skill || $cv->languages)
        <table class="two-column-table">
            @if($cv->computer_skill)
            <tr>
                <td class="label">Computer Skilled</td>
                <td class="colon">:</td>
                <td class="value">{{$cv->computer_skill}}</td>
                <td class="label"></td>
                <td class="colon"></td>
                <td class="value"></td>
            </tr>
            @endif
        </table>

        <!-- Language Skills -->
        <table class="education-table">
            <thead>
                <tr>
                    <th>Driving License</th>
                    <th>Light motor vehicle (Auto)</th>
                    <th>Issue Date</th>
                    <th>{{$cv->driving_license_issue_date ?? '2008-10-14'}}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>English</td>
                    <td>{{$cv->english_proficiency ?? 'Fair'}}</td>
                    <td>Urdu/Hindi</td>
                    <td>{{$cv->urdu_proficiency ?? 'Good'}}</td>
                </tr>
                <tr>
                    <td>Arabic</td>
                    <td>{{$cv->arabic_proficiency ?? 'Good'}}</td>
                    <td>Mother Language</td>
                    <td>{{$cv->mother_language ?? $cv->languages}}</td>
                </tr>
            </tbody>
        </table>
        @endif

        <!-- Job Experience Section -->
        <div class="section-header">
            JOB EXPERIENCE
        </div>
        <table class="experience-table">
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Duration</th>
                    <th>Company Name</th>
                </tr>
            </thead>
            <tbody>
                @if($cv->experiences)
                @php
                $experiences = is_string($cv->experiences) ? json_decode($cv->experiences, true) : $cv->experiences;
                @endphp
                @foreach($experiences as $experience)
                <tr>
                    <td>{{$experience['position'] ?? ''}}</td>
                    <td>{{$experience['start_date'] ?? ''}} - {{$experience['is_present'] ? 'Present' : $experience['end_date']}}</td>
                    <td>{{$experience['company'] ?? ''}}</td>
                </tr>
                @endforeach
                @endif
            </tbody>
        </table>

        <!-- Summary Section -->
        @if($cv->summary)
        <div class="summary-section">
            <div class="summary-header">Summary for application</div>
            <div class="summary-text">{{$cv->summary}}</div>
        </div>
        @endif

    </div>
</body>

</html>