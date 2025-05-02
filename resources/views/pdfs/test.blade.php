@php
    use Carbon\Carbon;
@endphp

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>{{$cv->name}} - {{$cv->designation}} Resume</title>
    <style>
        /* DOMPDF compatible styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }

        .resume-container {
            width: 100%;
            background-color: white;
            position: relative;
            overflow: hidden;
        }

        .left-section {
            width: 35%;
            background-color: #1a222e;
            color: white;
            float: left;
            padding: 30px;
            box-sizing: border-box;
            min-height: 100vh;
        }

        .right-section {
            width: 65%;
            float: left;
            padding: 30px 40px;
            box-sizing: border-box;
        }

        /* Profile section */
        .profile-container {
            text-align: center;
            margin-bottom: 30px;
        }
        

        .profile-circle {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            background-color: #c08b45;
            display: inline-block;
            padding: 5px;
            position: relative;
            z-index: 9999;
            margin-top: 35px;
        }

        .shape{
            position: absolute;
            left: -5px;
            top: -5px;
            z-index: -1;
        }

        .profile-inner-circle {
            width: 170px;
            height: 170px;
            border-radius: 50%;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            margin: 5px 0 0 5px;
        }

        .profile-image {
            width: 160px;
            height: 160px;
            border-radius: 50%;
        }

        .name-title {
            padding: 20px 0;
        }

        .name {
            font-size: 32px;
            color: #c08b45;
            font-weight: bold;
            line-height: 1;
            margin-bottom: 5px;
        }

        .title {
            font-size: 18px;
            font-weight: bold;
            margin-top: 10px;
        }

        .section {
            margin-bottom: 30px;
        }

        /* Section headers */
        .section-header {
            margin-bottom: 20px;
            position: relative;
        }

        .icon-circle {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: #c08b45;
            display: inline-block;
            text-align: center;
            line-height: 36px;
            border: 2px solid white;
            vertical-align: middle;
            margin-right: -18px;
            position: relative;
            z-index: 2;
        }

        .header-text {
            background-color: #c08b45;
            color: white;
            padding: 7px 20px 7px 30px;
            border-radius: 0 20px 20px 0;
            display: inline-block;
            font-size: 18px;
            font-weight: bold;
            vertical-align: middle;
            position: relative;
            z-index: 1;
            margin-left: -10px;
        }

        /* Contact section */
        .contact-info {
            margin-top: 20px;
        }

        .contact-item {
            margin-bottom: 15px;
            display: table;
            width: 100%;
        }

        .contact-icon {
            width: 50px;
            display: table-cell;
            vertical-align: middle;
            text-align: center;
            font-size: 18px;
        }

        .contact-text {
            display: table-cell;
            vertical-align: middle;
            padding-left: 10px;
            font-size: 14px;
        }

        /* Skills and interests */
        .skill-item, .interest-item {
            margin-bottom: 10px;
            display: table;
            width: 100%;
        }

        .bullet {
            display: table-cell;
            width: 20px;
            vertical-align: top;
            font-size: 18px;
        }

        .skill-text, .interest-text {
            display: table-cell;
            vertical-align: top;
            font-size: 14px;
        }

        /* About section */
        .about-text {
            line-height: 1.6;
            margin-bottom: 30px;
            text-align: justify;
            font-size: 14px;
        }

        /* Timeline sections */
        .timeline-item {
            margin-bottom: 25px;
            position: relative;
            padding-left: 150px;
        }

        .timeline-date {
            position: absolute;
            left: 0;
            top: 0;
            width: 140px;
            font-weight: bold;
            font-size: 14px;
        }

        .timeline-content {
            position: relative;
            padding-left: 20px;
            border-left: 2px solid #1a222e;
            padding-bottom: 20px;
        }

        .timeline-dot {
            position: absolute;
            left: -6px;
            top: 0;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #1a222e;
        }

        .timeline-company {
            font-weight: bold;
            font-size: 15px;
            margin-right: 10px;
            display: inline-block;
        }

        .timeline-position {
            color: #1a222e;
            font-weight: bold;
            font-size: 15px;
            display: inline-block;
        }

        .timeline-description {
            margin-top: 5px;
            font-size: 13px;
            line-height: 1.4;
        }

        /* Language section */
        .language-list {
            margin-left: 20px;
        }

        .language-item {
            margin-bottom: 8px;
            font-size: 14px;
            font-weight: bold;
        }

        /* Reference section */
        .reference-list {
            margin-left: 20px;
        }

        .reference-item {
            margin-bottom: 15px;
        }

        .reference-name {
            font-weight: bold;
            font-size: 14px;
        }

        .reference-position {
            margin-bottom: 5px;
            font-size: 13px;
        }

        .reference-contact {
            font-size: 13px;
        }

        /* Footer */
        .footer {
            width: 100%;
            text-align: center;
            font-size: 10px;
            color: #666;
            margin-top: 30px;
            padding-top: 20px;
            clear: both;
        }

        /* Clearfix */
        .clearfix:after {
            content: "";
            display: table;
            clear: both;
        }
    </style>
</head>
<body>
<div class="resume-container clearfix">

    <!-- Left Section -->
    <div class="left-section">
        <div class="profile-container">
            <div class="profile-circle">
                <div class="profile-inner-circle">
                    <img src="{{ public_path(str_replace(url('/'), '', $cv->avatar)) }}" alt="{{$cv->name}}" class="profile-image">
                </div>
            </div>
            <div class="shape">
                 <img src="{{ public_path(str_replace(url('/'), '', 'assets/images/cv/cvshape.png')) }}" alt="Image" style="width: 330px; height: 360px;">
            </div>
        </div>

        <div class="name-title">
            <h1 class="name">{{$cv->name}}</h1>
            <h2 class="title">{{$cv->designation}}</h2>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="icon-circle">
                    <img src="{{ public_path(str_replace(url('/'), '', 'assets/images/cv/contact.png')) }}" alt="{{$cv->name}}" class="profile-image" style="width: 24px; height: 24px; margin-top: 6px;">
                </div>
                <div class="header-text">Contact Me</div>
            </div>

            <div class="contact-info">
                <div class="contact-item">
                    <div class="contact-icon">
                        <img src="{{ public_path(str_replace(url('/'), '', 'assets/images/cv/call.png')) }}" alt="{{$cv->name}}" class="profile-image" style="width: 20px; height: 20px; margin-top: 4px;">
                    </div>
                    <div class="contact-text">{{$cv->phone}}</div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">
                        <img src="{{ public_path(str_replace(url('/'), '', 'assets/images/cv/message.png')) }}" alt="{{$cv->name}}" class="profile-image" style="width: 20px; height: 15px; margin-top: 4px; border-radius: 0">
                    </div>
                    <div class="contact-text">{{$cv->email}}</div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">
                        <img src="{{ public_path(str_replace(url('/'), '', 'assets/images/cv/link.png')) }}" alt="{{$cv->name}}" class="profile-image" style="width: 20px; height: 18px; margin-top: 4px; border-radius: 0">
                    </div>
                    <div class="contact-text">{{$cv->website}}</div>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="icon-circle">
                    <img src="{{ public_path(str_replace(url('/'), '', 'assets/images/cv/tik.png')) }}" alt="{{$cv->name}}" class="profile-image" style="width: 24px; height: 24px; margin-top: 6px;">
                </div>
                <div class="header-text">Personal Skills</div>
            </div>

            <div class="skills-list">
                @foreach(array_map('trim', explode(',', $cv->personal_skills)) as $item)
                    <div class="skill-item">
                        <div class="bullet">•</div>
                        <div class="skill-text">{{$item}}</div>
                    </div>
                @endforeach
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="icon-circle">
                    <img src="{{ public_path(str_replace(url('/'), '', 'assets/images/cv/love.png')) }}" alt="{{$cv->name}}" class="profile-image" style="width: 24px; height: 24px; margin-top: 6px;">
                </div>
                <div class="header-text">Interests</div>
            </div>

            <div class="interest-list">
                @foreach(array_map('trim', explode(',', $cv->interests)) as $item)
                    <div class="interest-item">
                        <div class="bullet">•</div>
                        <div class="interest-text">{{$item}}</div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>

    <!-- Right Section -->
    <div class="right-section">
        <div class="section">
            <div class="section-header">
                <div class="icon-circle">
                    <img src="{{ public_path(str_replace(url('/'), '', 'assets/images/cv/user.png')) }}" alt="{{$cv->name}}" class="profile-image" style="width: 20px; height: 20px; margin-top: 6px; border-radius: 0">
                </div>
                <div class="header-text">About Me</div>
            </div>

            <div class="about-text">
                {{ $cv->summary }}
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="icon-circle">
                   <img src="{{ public_path(str_replace(url('/'), '', 'assets/images/cv/officebag.png')) }}" alt="{{$cv->name}}" class="profile-image" style="width: 20px; height: 20px; margin-top: 6px; border-radius: 0">
                </div>
                <div class="header-text">Experience</div>
            </div>

            <div class="timeline">
                @foreach($cv->experiences as $exp)
                    <div class="timeline-item">
                        <div class="timeline-date">{{ Carbon::parse($exp['start_date'])->format('Y') ?? '' }} - {{ ((bool)$exp['is_present'] ?? false) ? 'PRESENT' : Carbon::parse($exp['end_date'])->format('Y') ?? '' }}</div>
                        <div class="timeline-content">
                            <div class="timeline-dot"></div>
                            <div class="timeline-company">{{ $exp['company'] ?? '' }}</div>
                            <div class="timeline-position">{{ $exp['position'] ?? '' }}</div>
                            <div class="timeline-description">
                                • {{ $exp['description'] ?? '' }}
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="icon-circle">
                   <img src="{{ public_path(str_replace(url('/'), '', 'assets/images/cv/book.png')) }}" alt="{{$cv->name}}" class="profile-image" style="width: 20px; height: 15px; margin-top: 12px; border-radius: 0">
                </div>
                <div class="header-text">Education</div>
            </div>

            <div class="timeline">
                @foreach($cv->educations as $edu)
                    <div class="timeline-item">
                        <div class="timeline-date">{{ Carbon::parse($edu['start_date'])->format('Y') ?? '' }} - {{ Carbon::parse($edu['end_date'])->format('Y') ?? '' }}</div>
                        <div class="timeline-content">
                            <div class="timeline-dot"></div>
                            <div class="timeline-company">{{ $edu['institute'] ?? ''}}</div>
                            <div class="timeline-description">
                                • {{ $edu['department'] ?? '' }}
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="icon-circle">
                    <img src="{{ public_path(str_replace(url('/'), '', 'assets/images/cv/flug.png')) }}" alt="{{$cv->name}}" class="profile-image" style="width: 20px; height: 15px; margin-top: 11px; border-radius: 0">
                </div>
                <div class="header-text">Languages</div>
            </div>

            <div class="language-list">
                @foreach(array_map('trim', explode(',', $cv->languages)) as $item)
                    <div class="language-item">• {{$item}}</div>
                @endforeach
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="icon-circle">
                    <img src="{{ public_path(str_replace(url('/'), '', 'assets/images/cv/useryellow.png')) }}" alt="{{$cv->name}}" class="profile-image" style="width: 20px; height: 20px; margin-top: 6px; border-radius: 0">
                </div>
                <div class="header-text">Reference</div>
            </div>

            <div class="reference-list">
                @foreach($cv->references as $reference)
                    <div class="reference-item">
                        <div class="reference-name">{{ $reference['name'] ?? '' }}</div>
                        <div class="reference-position">{{ $reference['company'] ?? '' }} / {{ $reference['designation'] ?? '' }}</div>
                        <div class="reference-contact">Phone: {{ $reference['phone'] ?? '' }}</div>
                        <div class="reference-contact">Email: {{ $reference['email'] ?? '' }}</div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>

    <div class="footer">
        Copy Right : https://dubaievisaservice.com _ Apply Date : {{$cv->created_at}}   Application No. {{$cv->id}}
    </div>
</div>
</body>
</html>
