<!DOCTYPE html>
<html>
<head>
    <title>Visa Application Details - {{ $visaApply->id }}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            padding: 20px;
        }
        .section {
            margin-bottom: 20px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
        }
        .section-title {
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
        }
        .detail {
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <h1>Visa Application Details</h1>

    <div class="section">
        <div class="section-title">Personal Information</div>
        <div class="detail">Name: {{ $visaApply->name }}</div>
        <div class="detail">Passport Number: {{ $visaApply->passport->passport_no ?? 'N/A' }}</div>
        <div class="detail">Status: {{ $visaApply->status }}</div>
    </div>

    @if($visaApply->personalInfo)
    <div class="section">
        <div class="section-title">Nationality Details</div>
        <div class="detail">Current Nationality: {{ $visaApply->personalInfo->currentNationality->name ?? 'N/A' }}</div>
        <div class="detail">Previous Nationality: {{ $visaApply->personalInfo->prevNationality->name ?? 'N/A' }}</div>
        <div class="detail">Birth Country: {{ $visaApply->personalInfo->birthCountry->name ?? 'N/A' }}</div>
    </div>
    @endif

    @if($visaApply->passport)
    <div class="section">
        <div class="section-title">Passport Details</div>
        <div class="detail">Issue Country: {{ $visaApply->passport->issueCountry->name ?? 'N/A' }}</div>
        <div class="detail">Passport Number: {{ $visaApply->passport->passport_no ?? 'N/A' }}</div>
    </div>
    @endif

    @if($visaApply->guarantor)
    <div class="section">
        <div class="section-title">Guarantor Details</div>
        <div class="detail">Guarantor Nationality: {{ $visaApply->guarantor->guarantorNationality->name ?? 'N/A' }}</div>
    </div>
    @endif

    <div class="section">
        <div class="section-title">Application Details</div>
        <div class="detail">Created At: {{ $visaApply->created_at->format('Y-m-d H:i:s') }}</div>
    </div>
</body>
</html>