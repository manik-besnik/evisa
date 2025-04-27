<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Visa Application Details - {{ $visaApply->id }}</title>
    <style>
        body {
            font-family: DejaVu Sans, sans-serif;
            font-size: 12px;
            color: #333;
            margin: 20px;
        }
        .section {
            margin-bottom: 20px;
        }
        .section-title {
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 10px;
            color: #444;
        }
        .box {
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 6px;
        }
        .info-item {
            margin-bottom: 8px;
        }
        .info-label {
            font-weight: bold;
            color: #777;
            display: block;
        }
        .info-value {
            color: #222;
        }
        .warning {
            color: #d9534f;
            font-size: 12px;
            margin-top: 5px;
            margin-bottom: 5px;
        }
        .row {
            width: 100%;
            display: table;
            table-layout: fixed;
        }
        .col {
            display: table-cell;
            vertical-align: top;
            padding-right: 15px;
        }
        .btn-confirm {
            display: inline-block;
            padding: 8px 20px;
            background-color: #3490dc;
            color: white;
            text-align: center;
            margin-top: 20px;
            border-radius: 5px;
            font-size: 14px;
        }
    </style>
</head>
<body>

<h2>View Apply Preview</h2>

<!-- If passport required -->
@if($isPassportRequired)
    <div class="warning">Passport Document is required</div>
@endif

<!-- If photo required -->
@if($isPhotoRequired)
    <div class="warning">Photo Document is required</div>
@endif

<div class="row">
    <div class="col">
        <div class="section">
            <div class="section-title">General Info</div>
            <div class="box">
                <div class="info-item">
                    <span class="info-label">Name</span>
                    <span class="info-value">{{ $visa_apply->name ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Name (Arabic)</span>
                    <span class="info-value">{{ $visa_apply->name_arabic ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Current Nationality</span>
                    <span class="info-value">{{ getNationality($visa_apply->current_nationality) }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Previous Nationality</span>
                    <span class="info-value">{{ getNationality($visa_apply->prev_nationality) }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Gender</span>
                    <span class="info-value">{{ getValue($genders, $visa_apply->gender) }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Date of Birth</span>
                    <span class="info-value">{{ $visa_apply->date_of_birth ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Birth Country</span>
                    <span class="info-value">{{ getCountry($visa_apply->birth_country) }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Marital Status</span>
                    <span class="info-value">{{ getValue($maritalStatuses, $visa_apply->marital_status) }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Birth Place</span>
                    <span class="info-value">{{ $visa_apply->birth_place ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Birth Place (Arabic)</span>
                    <span class="info-value">{{ $visa_apply->birth_place_arabic ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Mother's Name</span>
                    <span class="info-value">{{ $visa_apply->mother_name ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Mother's Name (Arabic)</span>
                    <span class="info-value">{{ $visa_apply->mother_name_arabic ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Religion</span>
                    <span class="info-value">{{ $visa_apply->religion ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Faith</span>
                    <span class="info-value">{{ $visa_apply->faith ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Qualification</span>
                    <span class="info-value">{{ $visa_apply->qualification ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Profession</span>
                    <span class="info-value">{{ $visa_apply->profession ?? 'N/A' }}</span>
                </div>
            </div>
        </div>
    </div>

    <div class="col">
        <div class="section">
            <div class="section-title">Visa Info</div>
            <div class="box">
                <div class="info-item">
                    <span class="info-label">Personal Name | Company Name</span>
                    <span class="info-value">{{ $visa_apply->personal_name ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Processing Type</span>
                    <span class="info-value">{{ getValue($visaProcessingTypes, $visa_apply->processing_type) }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Visa Type</span>
                    <span class="info-value">{{ getValue($visaTypes, $visa_apply->visa_type) }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Group</span>
                    <span class="info-value">{{ getValue($groups, $visa_apply->group) }}</span>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Passport Info</div>
            <div class="box">
                <div class="info-item">
                    <span class="info-label">Passport Type</span>
                    <span class="info-value">{{ $visa_apply->passport_type ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Passport Number</span>
                    <span class="info-value">{{ $visa_apply->passport_no ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Issue Date</span>
                    <span class="info-value">{{ $visa_apply->passport_issue_date ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Expiry Date</span>
                    <span class="info-value">{{ $visa_apply->passport_expire_date ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Issue Place</span>
                    <span class="info-value">{{ $visa_apply->passport_issue_place ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Issue Place (Arabic)</span>
                    <span class="info-value">{{ $visa_apply->passport_issue_place_arabic ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Issue Country</span>
                    <span class="info-value">{{ getCountry($visa_apply->passport_issue_country) }}</span>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Guarantor Info</div>
            <div class="box">
                <div class="info-item">
                    <span class="info-label">Guarantor Name</span>
                    <span class="info-value">{{ $visa_apply->guarantor_name ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Guarantor Passport Number</span>
                    <span class="info-value">{{ $visa_apply->guarantor_passport_no ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Guarantor Nationality</span>
                    <span class="info-value">{{ getNationality($visa_apply->guarantor_nationality) }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Guarantor Phone</span>
                    <span class="info-value">{{ $visa_apply->guarantor_phone ?? 'N/A' }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Guarantor Relation</span>
                    <span class="info-value">{{ $visa_apply->guarantor_relation ?? 'N/A' }}</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div style="text-align: center;">
    <div class="btn-confirm">
        Confirm Submit
    </div>
</div>

</body>
</html>
