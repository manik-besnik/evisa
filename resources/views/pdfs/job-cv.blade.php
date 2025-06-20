@php
    use Carbon\Carbon;
        $genders = [
           '1' => 'Male',
            '2' => 'Female',
            '3' => 'Others',
        ];

        $languageProficiency = [
           '1' => 'Good',
            '2' => 'Fair',
            '3' => 'Poor',
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
        $drivingLicenses = [
            '1' =>'Light motor vehicle (Manual)',
            '2' =>'Light motor vehicle (Auto)',
            '3' =>'Motorcycle',
            '4' =>'Heavy truck',
            '5' => 'Mini bus',
            '6' =>'Heavy bus',
            '7' =>'Fork lift',
            '8' =>'Shovel',
        ];


@endphp
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
            padding: 15px;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
        }

        .job-application-label {
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 10px;
        }

        .photo-and-info-container {
            width: 100%;
            margin-bottom: 20px;
            position: relative;
        }

        .photo-container {
            width: 120px;
            height: 150px;
            margin: 0 auto;
            border: 1px solid #ddd;
            overflow: hidden;
        }

        .photo-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .applicant-info {
            position: absolute;
            right: 0;
            top: 0;
            text-align: right;
        }
        .photo-container-job {
            position: absolute;
            left: 0;
            top: 0;
            width: 220px;
            height: 150px;
            margin: 0 auto;
        }

        .photo-container-job img {
            margin-top: -15px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .applicant-name {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .section-header {
            background-color: #f0f0f0;
            padding: 5px;
            font-weight: bold;
            margin: 15px 0 10px 0;
            border: 1px solid #ddd;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 10px;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 5px;
            text-align: left;
        }

        .two-column-table td {
            padding: 3px 5px;
            border: none;
        }

        .two-column-table .label {
            width: 25%;
            font-weight: bold;
        }

        .two-column-table .colon {
            width: 1%;
            padding: 0 3px;
        }

        .two-column-table .value {
            width: 24%;
        }

        .summary-section {
            margin-top: 15px;
        }

        .summary-header {
            font-weight: bold;
            margin-bottom: 5px;
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
            <div class="job-application-label">JOB APPLICATION FORM</div>
        </div>

        <div class="photo-and-info-container">
            <div class="photo-container-job">
                <img src="{{ public_path('assets/images/cvandjobform.png') }}" alt="Photo">
            </div>

            <div class="photo-container">
                <img src="{{ public_path(str_replace(url('/'), '', $cv->avatar)) }}" alt="Profile Photo">
            </div>
            
            <div class="applicant-info">
                <div class="applicant-name">{{strtoupper($cv->name)}}</div>
                <div>{{$cv->designation}}</div>
                <div><strong>Mob:</strong> {{$cv->phone}}</div>
                <div><strong>Email:</strong> {{$cv->email}}</div>
                @if($cv->website)
                <div><strong>Website:</strong> {{$cv->website}}</div>
                @endif
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
       <hr>
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

        <hr>
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
                <th>{{$drivingLicenses[$cv->driving_license]}}</th>
                <th>Issue Date</th>
                <th>{{$cv->driving_license_issue_date ?? ' '}}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>English</td>
                <td>{{$languageProficiency[$cv->english_proficiency]}}</td>
                <td>Urdu/Hindi</td>
                <td>{{$languageProficiency[$cv->urdu_proficiency]}}</td>
            </tr>
            <tr>
                <td>Arabic</td>
                <td>{{$languageProficiency[$cv->arabic_proficiency]}}</td>
                <td>Mother Language</td>
                <td>{{$cv->language->name}}</td>
            </tr>
        </tbody>
    </table>

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

        @if($cv->summary)
        <div class="summary-section">
            <div class="summary-header" style="font-size: 14px">Summary for application</div>
            <div class="summary-text" style="border: 1px solid #6f6d6d; padding: 10px; margin-top: 15px;">{{$cv->summary}}</div>
        </div>
        @endif
    </div>
</body>

</html>