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
                        <img src="{{ public_path(str_replace(url('/'), '', 'assets/images/cv/message.png')) }}" alt="{{$cv->name}}" class="profile-image" style="width: 20px; height: 20px; margin-top: 4px; border-radius: 0">
                    </div>
                    <div class="contact-text">{{$cv->email}}</div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">
                        <img src="{{ public_path(str_replace(url('/'), '', 'assets/images/cv/link.png')) }}" alt="{{$cv->name}}" class="profile-image" style="width: 20px; height: 20px; margin-top: 4px;">
                    </div>
                    <div class="contact-text">{{$cv->website}}</div>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="icon-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="white"/>
                    </svg>
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35C15.0787 21.35 17.75 18.6787 17.75 15.6C17.75 12.5213 15.0787 9.85 12 9.85C8.92129 9.85 6.25 12.5213 6.25 15.6C6.25 18.6787 8.92129 21.35 12 21.35Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 6.84998C14.2091 6.84998 16 8.64098 16 10.85C16 13.059 14.2091 14.85 12 14.85C9.79086 14.85 8 13.059 8 10.85C8 8.64098 9.79086 6.84998 12 6.84998Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.92999 4.92996C6.9849 2.87495 9.8509 2 12.9299 2C17.3929 2 20.9299 4.53704 21.7599 8.00004C21.9999 8.74999 21.9999 9.60004 21.7599 10.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14C14.7614 14 17 11.7614 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 11.7614 9.23858 14 12 14Z" stroke="#1a222e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.5899 22.0001C20.5899 18.6867 17.8987 15.9998 14.5899 15.9998C13.583 15.9998 12.6604 16.171 11.8489 16.4865C11.0374 16.171 10.1148 15.9998 9.1079 15.9998C5.80002 15.9998 3.09993 18.6867 3.09993 22.0001" stroke="#1a222e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 16V8C21 4 18 2 14 2H10C6 2 4 4 4 8V16C4 20 6 22 10 22H14C18 22 21 20 21 16Z" stroke="#1a222e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 2V6H8V2" stroke="#1a222e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C15.1989 2 18.103 3.96514 19.6613 6.68321C20.3754 7.7057 20.625 8.99988 20.625 10.3125C20.625 15.5188 16.625 19.5188 12 19.5188C7.37502 19.5188 3.37502 15.5188 3.37502 10.3125C3.37502 8.99988 3.62461 7.7057 4.33874 6.68321C5.89695 3.96514 8.80107 2 12 2Z" stroke="#1a222e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.5 8.5L10.5 12.5L15.5 10.5" stroke="#1a222e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 4.99988H21" stroke="#1a222e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7 9.99988C7 8.99988 7.9 8.09988 9 8.09988H15C16.1 8.09988 17 8.99988 17 9.99988V18.9999C17 19.9999 16.1 20.9999 15 20.9999H9C7.9 20.9999 7 19.9999 7 18.9999V9.99988Z" stroke="#1a222e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12ZM12 14C10.3431 14 9 15.3431 9 17C9 18.6569 10.3431 20 12 20C13.6569 20 15 18.6569 15 17C15 15.3431 13.6569 14 12 14Z" fill="#1a222e"/>
                    </svg>
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
