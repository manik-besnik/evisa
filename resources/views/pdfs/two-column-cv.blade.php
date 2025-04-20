<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Esther Smith - Marketing Manager Resume</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background-color: #f5f5f5;
            justify-content: center;
            padding: 20px;
        }

        .resume-container {
            width: 100%;
            max-width: 1000px;
            background-color: white;
            display: flex;
            position: relative;
            margin: 0 auto;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .left-section {
            width: 30%;
            background-color: #1a222e;
            color: white;
            position: relative;
            z-index: 1;
            padding: 30px;
        }

        .right-section {
            width: 70%;
            padding: 30px 40px;
            position: relative;
            z-index: 1;
        }

        /* Profile section */
        .profile-container {
            position: relative;
            z-index: 2;
            margin-left: 30px;
        }

        .profile-circle {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            background-color: #c08b45;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 5px solid white;
        }

        .profile-inner-circle {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        .profile-image {
            width: 140px;
            height: 140px;
            object-fit: cover;
        }

        .name-title {
            padding: 20px 0;
            margin-top: 20px;
        }

        .name {
            font-size: 48px;
            color: #c08b45;
            font-weight: bold;
            line-height: 1;
            margin-bottom: 5px;
        }

        .title {
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 1px;
            margin-top: 10px;
        }

        .section {
            margin-bottom: 30px;
            position: relative;
        }

        /* Section headers */
        .section-header {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            position: relative;
        }

        .icon-circle {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: #c08b45;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid white;
            z-index: 2;
            position: relative;
        }

        .icon {
            color: white;
            font-size: 18px;
        }

        .header-text {
            background-color: #c08b45;
            color: white;
            padding: 7px 20px 7px 30px;
            border-radius: 0 20px 20px 0;
            font-size: 20px;
            font-weight: bold;
            margin-left: -18px;
            z-index: 1;
            position: relative;
        }

        .right-section .header-text {
            padding: 6px 20px 6px 30px;
        }
        /* Contact section */
        .contact-info {
            margin-top: 20px;
        }

        .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        }

        .contact-icon {
            width: 30px;
            margin-right: 15px;
            text-align: center;
            font-size: 20px;
        }

        .contact-text {
            font-size: 16px;
        }

        .skill-item, .interest-item {
            margin-bottom: 12px;
            display: flex;
            align-items: baseline;
        }

        .bullet {
            margin-right: 10px;
            font-size: 20px;
        }

        /* About section */
        .about-text {
            line-height: 1.6;
            margin-bottom: 30px;
            text-align: justify;
        }

        .timeline-item {
            position: relative;
            display: flex;
            margin-bottom: 30px;
        }

        .timeline-dot {
            position: absolute;
            left: 135px;
            top: 5px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #1a222e;
        }

        /* Timeline sections */
        .timeline-separator {
            position: relative;
            margin-left: 20px;
            padding-left: 30px;
        }

        .timeline-separator::before {
            content: '';
            position: absolute;
            left: 0;
            top: 10px;
            height: calc(100% - 10px);
            width: 2px;
            background-color: #1a222e;
        }

        .timeline-date {
            font-weight: bold;
            margin-bottom: 5px;
            font-size: 15px;
            min-width: 120px;
        }

        .timeline-company {
            font-weight: bold;
            margin-bottom: 5px;
            font-size: 16px;
        }

        .timeline-position {
            color: #1a222e;
            font-weight: bold;
            margin-bottom: 5px;
            font-size: 16px;
        }

        .timeline-description {
            margin-top: 5px;
            line-height: 1.4;
            font-size: 15px;
        }

        /* Language section */
        .language-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
            font-size: 16px;
            margin-left: 50px;
            font-weight: bold;
        }

        /* Reference section */
        .reference-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-left: 50px;
        }

        .reference-item {
            margin-bottom: 10px;
        }

        .reference-name {
            font-weight: bold;
            font-size: 16px;
        }

        .reference-position {
            margin-bottom: 5px;
        }

        .interest-list,
        .skills-list{
            margin-left: 50px;
        }

        /* Footer */
        .footer {
            width: 100%;
            text-align: center;
            font-size: 12px;
            color: #666;
            margin: 20px 0 0;
        }

        .flex {
            display: flex;
            justify-content: space-between;
        }
    </style>
</head>
<body>
<div class="resume-container">

    <!-- Left Section -->
    <div class="left-section">
        <div class="profile-container">
            <div class="profile-circle">
                <div class="profile-inner-circle">
                    <img src="{{ public_path(str_replace(url('/'), '', $cv->avatar)) }}" alt="Profile" class="profile-image">
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
                    <span class="icon">👤</span>
                </div>
                <div class="header-text">Contact Me</div>
            </div>

            <div class="contact-info">
                <div class="contact-item">
                    <div class="contact-icon">📞</div>
                    <div class="contact-text">{{$cv->phone}}</div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">✉️</div>
                    <div class="contact-text">{{$cv->email}}</div>
                </div>
{{--                <div class="contact-item">--}}
{{--                    <div class="contact-icon">📍</div>--}}
{{--                    <div class="contact-text">123 Anywhere St., Any City</div>--}}
{{--                </div>--}}
                <div class="contact-item">
                    <div class="contact-icon">🔗</div>
                    <div class="contact-text">{{$cv->website}}</div>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="icon-circle">
                    <span class="icon">✓</span>
                </div>
                <div class="header-text">Personal Skills</div>
            </div>

            <div class="skills-list">
                @foreach(array_map('trim', explode(',', $cv->personal_skills)) as $item)
                <div class="skill-item">
                    <span class="bullet">•</span>
                    <span>{{$item}}</span>
                </div>
                @endforeach

            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="icon-circle">
                    <span class="icon">❤</span>
                </div>
                <div class="header-text">Interest</div>
            </div>

            <div class="interest-list">
                @foreach(array_map('trim', explode(',', $cv->interests)) as $item)
                <div class="interest-item">
                    <span class="bullet">•</span>
                    <span>{{$item}}</span>
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
                    <span class="icon">👤</span>
                </div>
                <div class="header-text">About Me</div>
            </div>

            <div class="about-text">
                {{$cv->summary}}
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="icon-circle">
                    <span class="icon">💼</span>
                </div>
                <div class="header-text">Experience</div>
            </div>
            @foreach($cv->experiences as $exp)
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">
                        {{ $exp['start_date'] ?? '' }} - {{(bool)$exp['is_present'] ? 'PRESENT' : ($exp['end_date'] ?? '')}}
                    </div>
                    <div class="timeline-separator"></div>
                    <div class="timeline-dot"></div>
                    <div>
                        <div class="flex">
                            <div class="timeline-company">{{ $exp['company'] ?? '' }}</div>
                            <div class="timeline-position">{{ $exp['position'] ?? '' }}</div>
                        </div>
                        <div class="timeline-description">
                            • {{ $exp['description'] ?? '' }}
                        </div>
                    </div>
                </div>
            </div>
            @endforeach
        </div>

        <div class="section">
            <div class="section-header">
                <div class="icon-circle">
                    <span class="icon">📚</span>
                </div>
                <div class="header-text">Education</div>
            </div>
            @foreach($cv->educations as $edu)
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">
                        {{$edu['start_date'] ?? ''}}
                        -{{$edu['end-date'] ?? ''}}
                    </div>
                    <div class="timeline-separator"></div>
                    <div class="timeline-dot"></div>
                    <div>
                        <div class="flex">
                            <div class="timeline-company">{{$edu['institute'] ?? ''}}</div>
                        </div>
                        <div class="timeline-description">
                            • {{$edu['department'] ?? ''}}
                        </div>
                    </div>
                </div>

            </div>

            @endforeach
        </div>

        <div class="section">
            <div class="section-header">
                <div class="icon-circle">
                    <span class="icon">🗣️</span>
                </div>
                <div class="header-text">Language</div>
            </div>

            <div class="language-list">
                @foreach(array_map('trim', explode(',', $cv->interests)) as $item)
                <div>{{$item}}</div>
                @endforeach
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="icon-circle">
                    <span class="icon">👥</span>
                </div>
                <div class="header-text">Reference</div>
            </div>

            <div class="reference-list">
                @foreach($cv->references as $reference)
                <div class="reference-item">

                    <div class="reference-name">{{$reference['name']}}</div>
                    <div class="reference-position">
                        {{$reference['company'] ?? '' }} / {{$reference['designation'] ?? '' }}
                    </div>
                    <div>Phone: {{$reference['phone'] ?? ''}}</div>
                    <div>Email: {{$reference['email'] ?? ''}}</div>
                </div>

                @endforeach
            </div>
        </div>

    </div>

</div>

<div class="footer">
    Copy Right : https://dubaievisaservice.com _ Apply Date : {{$cv->created_at}}   Application No. {{$cv->id}}
</div>
</body>
</html>
