<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{ $job->title }} Job Details</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            font-size: 12px;
        }
        .job-header {
            position: relative;
            height: 200px;
            background-color: #d1d5db; /* Gray-300 */
            overflow: hidden;
            text-align: center;
        }
        .job-header img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .job-title-container {
            position: absolute;
            bottom: 10px;
            left: 20px;
            background: rgba(0, 0, 0, 0.6);
            color: white;
            padding: 10px;
            font-size: 24px;
            font-weight: bold;
        }
        .job-info {
            background: white;
            padding: 15px;
            border-bottom: 2px solid #e5e7eb; /* Light gray */
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .job-info h2 {
            font-size: 22px;
            font-weight: bold;
            color: #15803d; /* Green */
        }
        .job-info .salary {
            font-size: 18px;
            font-weight: bold;
        }
        .job-info .job-code {
            text-align: right;
        }
        .job-info .job-code p {
            margin: 0;
        }
        .job-info .job-code .code-label {
            font-size: 12px;
            color: #6b7280; /* Gray */
        }
        .job-info .job-code .code-number {
            font-size: 18px;
            font-weight: bold;
            color: #dc2626; /* Red */
        }
        .job-title {
            font-size: 24px;
            font-weight: bold;
            color: #15803d;
            margin-bottom: 5px;
        }
        .job-salary {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
        }
        .job-code {
            color: #dc2626;
            font-weight: bold;
        }
        
        /* Table styling */
        table.details-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        
        table.details-table td.label {
            width: 30%;
            background-color: #EFD79D;
            border: 2px solid #8A9298;
            padding: 8px;
            font-weight: bold;
            text-align: right;
        }
        
        table.details-table td.value {
            width: 70%;
            border: 2px solid #8A9298;
            border-left: 4px solid #ef4444;
            padding: 8px;
            text-align: left;
        }
        
        .contact-section {
            background-color: #5D5E5E;
            color: white;
            padding: 15px;
            text-align: center;
            margin: 20px 0;
        }
        .requirements-section {
            background-color: white;
            padding: 15px;
            margin-bottom: 20px;
        }
        .footer {
            background-color: #3C4344;
            color: white;
            padding: 15px;
            text-align: center;
        }
    </style>
</head>
<body>
     
    <div class="job-info">
        <div>
            <h2>{{ $job->title }}</h2>
            <p class="salary">Salary {{ $job->salary }}</p>
        </div>
        <div class="job-code">
            <p class="code-label">Code No.</p>
            <p class="code-number">{{ $job->code }}</p>
        </div>
    </div>

    <table class="details-table">
        <tr>
            <td class="label">Job Location</td>
            <td class="value">{{ $job->location }}</td>
        </tr>
        <tr>
            <td class="label">Visa validity</td>
            <td class="value">{{ $job->visaValidity }}</td>
        </tr>
        <tr>
            <td class="label">Accommodation</td>
            <td class="value">{{ $job->accommodation }}</td>
        </tr>
        <tr>
            <td class="label">Transport</td>
            <td class="value">{{ $job->transport }}</td>
        </tr>
        <tr>
            <td class="label">Food</td>
            <td class="value">{{ $job->food }}</td>
        </tr>
        <tr>
            <td class="label">Medical Insurance</td>
            <td class="value">{{ $job->medicalInsurance }}</td>
        </tr>
        <tr>
            <td class="label">Daily working hours</td>
            <td class="value">{{ $job->workingHours }}</td>
        </tr>
        <tr>
            <td class="label">Salary</td>
            <td class="value">{{ $job->salaryRange }}</td>
        </tr>
        <tr>
            <td class="label">Vacation benefits</td>
            <td class="value">{{ $job->vacationBenefits }}</td>
        </tr>
        <tr>
            <td class="label">Age limits</td>
            <td class="value">{{ $job->ageLimits }}</td>
        </tr>
        <tr>
            <td class="label">In-demand workers</td>
            <td class="value">{{ $job->inDemandWorkers }}</td>
        </tr>
        <tr>
            <td class="label">Education</td>
            <td class="value">{{ $job->education }}</td>
        </tr>
        <tr>
            <td class="label">Company activities</td>
            <td class="value">{{ $job->companyActivities }}</td>
        </tr>
    </table>

    <div class="contact-section">
        <div style="font-size: 20px; font-weight: bold; margin-bottom: 5px;">
            {{ $job->contactNumber }}
        </div>
        <div>{{ $job->alternateNumbers }}</div>
    </div>

    <div class="requirements-section">
        <h3>Application Requirements:</h3>
        <p>{{ $job->applicationRequirements }}</p>
        <p style="font-weight: bold; margin-top: 10px;">Apply today, interview required.</p>
    </div>

    <div class="footer">
    <table width="100%">
        <tr>
            <td width="40%" style="text-align: left;">
                <img src="{{ public_path('assets/images/logowhite.png') }}" alt="Job Directory" style="height: 60px;">
            </td>
            <td width="40%" style="text-align: center;">
                <img src="{{ public_path('assets/images/localservice.png') }}" alt="Job Directory" style="height: 60px;">
            </td>
            <td width="20%" style="text-align: right;">
                <div>Dubai E-Visa Services</div>
            </td>
        </tr>
    </table>
</div>
</body>
</html>