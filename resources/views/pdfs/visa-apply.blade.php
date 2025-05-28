@php
    $groups = [
        1 => 'Main Person',
        2 => 'Son Of Main Person',
        3 => 'Daughter Of Main Person',
        4 => 'Wife Of Main Person',
    ];

    $visaProcessingTypes = [
        1 => 'Normal',
        2 => 'Urgent',
        3 => 'A2A',
        4 => 'Renewal',
    ];

    $genders = [
        1 => 'Male',
        2 => 'Female',
        3 => 'Female',
    ];

    $maritalStatuses = [
        1 => 'Single',
        2 => 'Married',
        3 => 'Divorced',
    ];

    $visaTypes = [
        1 => 'VISIT VISA',
        2 => 'EMPLOYMENT VISA',
        3 => 'INVESTOR / PARTNER VISA',
        4 => 'DOMESTIC WORKER',
        5 => 'FREE ZONE / FREELANCER',
        6 => 'FAMILY VISA',
        7 => 'STUDENT VISA',
        8 => 'GOLDEN VISA',
        9 => 'GREEN VISA',
    ];
@endphp

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Visa Application Form - {{ $visa_apply->id }}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html,
        body {
            margin: 0;
            padding: 0px;
            width: 100%;
            height: 100%;
        }

        body {
            font-family: Arial, sans-serif;
            font-size: 11px;
            color: #000;
            background-image: url('{{ public_path('assets/images/visaapplyformate.png') }}');
            background-size: cover;
        }

        .container {
            padding: 50px;
        }

        .header {
            width: 100%;
            padding-bottom: 15px;
            margin-bottom: 20px;
            height: 180px;
        }

        .passport-box {
            width: 20%;
            float: left;
            height: 129px;
            border: 2px solid #000;
            text-align: center;
            padding-top: 35px;
            font-size: 10px;
            font-weight: bold;
        }

        .logo-section {
            width: 80%;
            float: left;
            margin-bottom: 10px;
            text-align: center;
        }

        .logo-section img {
            margin-left: 160px;
        }

        .company-name {
            font-size: 14px;
            font-weight: bold;
            color: #000;
            margin-bottom: 5px;
        }

        .company-name-arabic {
            font-size: 12px;
            margin-bottom: 5px;
        }

        .service-line {
            font-size: 10px;
            color: #666;
            font-style: italic;
        }

        .form-title {
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            margin: 15px 0 5px 0;
        }

        .service-name {
            text-align: center;
            color: #0066cc;
            font-weight: bold;
            margin-bottom: 15px;
        }

        .date-code-section {
            text-align: center;
        }

        .date-code-section-code {
            text-align: center;
            margin-bottom: 20px;
        }

        .date-box,
        .code-box {
            width: 110px;
            display: inline-block;
            border: 1px solid #000;
            padding: 5px 15px;
            margin: 0 10px;
            font-weight: bold;
        }

        .code-box2 {
            width: 110px;
            display: inline-block;
            border: 1px solid #000;
            padding: 5px 15px;
            margin: 0 10px;
            font-weight: bold;
        }

        .section-header {
            background-color: #666;
            color: white;
            text-align: center;
            padding: 8px;
            font-weight: bold;
            font-size: 12px;
            margin-top: 20px;
        }

        .form-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 15px;
        }

        .form-table-top {
            width: 100%;
            border-collapse: collapse;
        }

        .form-table-top td {
            border: 1px solid #000;
            padding: 6px 8px;
            vertical-align: top;
        }

        .form-table-top .label {
            background-color: #f5f5f5;
            font-weight: bold;
            width: 120px;
            font-size: 10px;
        }

        .form-table-top .value {
            background-color: white;
            color: #0066cc;
            font-weight: bold;
        }


        .form-table td {
            border: 1px solid #000;
            padding: 6px 8px;
            vertical-align: top;
        }

        .form-table .label {
            background-color: #f5f5f5;
            font-weight: bold;
            width: 120px;
            font-size: 10px;
        }

        .form-table .value {
            background-color: white;
            color: #0066cc;
            font-weight: bold;
        }

        .two-column {
            display: table;
            width: 100%;
            table-layout: fixed;
        }

        .column {
            display: table-cell;
            width: 50%;
            vertical-align: top;
            padding-right: 10px;
        }

        .column:last-child {
            padding-right: 0;
            padding-left: 10px;
        }

        .small-table {
            width: 100%;
        }

        .small-table .label {
            width: 80px;
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

    @php
        $documents = json_decode($visa_apply->documents, true);
        $photo = collect($documents)->firstWhere('type', 'photo');
        $photoPath = null;

        if (!empty($photo)) {
            // Strip the base URL to get the relative path
            $relativePath = str_replace(url('/'), '', $photo['url']);
            $photoPath = public_path($relativePath);
        }
    @endphp

    <div class="container">

        <!-- Header Section -->
        <div class="header">
            <div class="passport-box">
                @if (file_exists($photoPath))
                    <img src="{{ $photoPath }}" alt="Passport Photo"
                        style="width: 100%; height: auto; margin-top: -40px;padding:5px">
                @else
                    <div style="margin-top: 10px;">No Photo</div>
                @endif
            </div>

            <div class="logo-section" style="margin-left: -150px">
                <img src="{{ public_path('assets/images/logo.png') }}" alt="Job Directory">
            </div>

        </div>
        <div style="clear: both; margin-top: -150px;"></div>
        <div class="form-title">APPLICATION FORM</div>
        <div class="service-name">({{ $visaTypes[$visa_apply->visa_type] ?? 'Service Name' }})</div>

        <!-- Date and Code Section -->
        <div class="date-code-section">
            <div class="date-box">Date:
                {{ $visa_apply?->created_at ? date('d/m/Y', strtotime($visa_apply->created_at)) : 'N/A' }}</div>
        </div>
        <div class="date-code-section-code">
            <div class="code-box2">{{ $visa_apply->code ?? 'V0000000' }}</div>
        </div>

        <!-- Applicant Information Section -->
        <div class="section-header">Applicant Information</div>

        <table class="form-table-top">
            <tr>
                <td class="label">Given Name</td>
                <td class="value">{{ strtoupper($visa_apply->name ?? 'N/A') }}</td>
            </tr>
            <tr>
                <td class="label">Surname</td>
                <td class="value">{{ strtoupper($visa_apply?->personalInfo?->surname ?? 'N/A') }}</td>
            </tr>
            <tr>
                <td class="label">Father's Name</td>
                <td class="value">{{ strtoupper($visa_apply->personalInfo->father_name ?? 'N/A') }}</td>
            </tr>
            <tr>
                <td class="label">Mother's Name</td>
                <td class="value">{{ strtoupper($visa_apply->personalInfo->mother_name ?? 'N/A') }}</td>
            </tr>
        </table>

        <table class="form-table">

            <tr>
                <td class="label">Gender</td>
                <td class="value">{{ strtoupper($genders[$visa_apply->personalInfo->gender] ?? ' ') }}</td>
                <td class="label">Date of Birth</td>
                <td class="value">
                    {{ $visa_apply?->personalInfo?->date_of_birth ? date('d/m/Y', strtotime($visa_apply->personalInfo->date_of_birth)) : 'N/A' }}
                </td>
            </tr>
            <tr>
                <td class="label">Place of Birth</td>
                <td class="value" colspan="3">{{ strtoupper($visa_apply?->personalInfo?->birth_place ?? 'N/A') }}
                </td>
            </tr>
            <tr>
                <td class="label">Profession</td>
                <td class="value">{{ strtoupper($visa_apply->personalInfo->profession ?? 'N/A') }}</td>
                <td class="label">Religion</td>
                <td class="value">{{ strtoupper($visa_apply->personalInfo->religion ?? 'N/A') }}</td>
            </tr>
            <tr>
                <td class="label">Marital Status</td>
                <td class="value">
                    {{ strtoupper($maritalStatuses[$visa_apply->personalInfo->marital_status] ?? ' ') }}</td>
                <td class="label">Nationality</td>
                <td class="value">{{ strtoupper($visa_apply->personalInfo->current_nationality?->name ?? 'N/A') }}
                </td>
            </tr>
            <tr>
                <td class="label">Passport No.</td>
                <td class="value">{{ strtoupper($visa_apply?->passport?->passport_no ?? 'N/A') }}</td>
                <td class="label">Place of Issue</td>
                <td class="value">{{ strtoupper($visa_apply?->passport?->passport_issue_place ?? 'N/A') }}</td>
            </tr>
            <tr>
                <td class="label">Date of Issue</td>
                <td class="value">
                    {{ $visa_apply?->passport?->passport_issue_date ? date('d/m/Y', strtotime($visa_apply->passport->passport_issue_date)) : 'N/A' }}
                </td>
                <td class="label">Date of Expiry</td>
                <td class="value">
                    {{ $visa_apply?->passport?->passport_expire_date ? date('d/m/Y', strtotime($visa_apply->passport->passport_expire_date)) : 'N/A' }}
                </td>
            </tr>
        </table>

        <!-- Guarantor Details Section -->
        <div class="section-header">Guarantor Details</div>


        <table class="form-table">
            <tr>
                <td class="label">Name</td>
                <td class="value">{{ strtoupper($visa_apply->guarantor->name ?? ' ') }}</td>
                <td class="label">Relation</td>
                <td class="value">{{ strtoupper($visa_apply->guarantor->relation ?? ' ') }}</td>
            </tr>
            <tr>
                <td class="label">Nationality</td>
                <td class="value">
                    {{ strtoupper($visa_apply?->guarantor?->guarantor_nationality?->name ?? ' ') }}</td>
                <td class="label">PPT or E-ID No</td>
                <td class="value">{{ strtoupper($visa_apply?->guarantor?->guarantor_passport_no ?? ' ') }}</td>
            </tr>
            <tr>
                <td class="label">Guarantor Type</td>
                <td class="value">{{ strtoupper($visa_apply->guarantor->relation ?? ' ') }}</td>
                <td class="label">Agency No.</td>
                <td class="value">{{ $visa_apply?->agency_no ?? ' ' }}</td>
            </tr>
            <tr>
                <td class="label">Mobile No.</td>
                <td class="value">{{ $visa_apply?->guarantor?->phone ?? 'N/A' }}</td>
                <td class="label">E-mail</td>
                <td class="value">{{ $visa_apply?->email ?? '' }}</td>
            </tr>
        </table>

    </div>

</body>

</html>
