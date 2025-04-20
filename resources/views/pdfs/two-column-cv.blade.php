<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Resume</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 14px;
            color: #222;
            background: #fff;
            margin: 0;
            padding: 0;
        }

        .container {
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }

        .header-table {
            width: 100%;
            border-collapse: collapse;
        }

        .profile-pic {
            width: 120px;
            height: 120px;
            border: 3px solid #c08b45;
        }

        .name {
            font-size: 28px;
            color: #c08b45;
            font-weight: bold;
        }

        .title {
            font-size: 16px;
            margin-top: 4px;
            font-weight: bold;
        }

        .section-title {
            background-color: #c08b45;
            color: white;
            padding: 6px 10px;
            font-weight: bold;
            margin-top: 20px;
            font-size: 16px;
        }

        .section-content {
            padding: 10px 0;
        }

        .contact-item {
            margin-bottom: 5px;
        }

        .skills-table, .education-table, .experience-table {
            width: 100%;
            border-collapse: collapse;
        }

        .skills-table td, .education-table td, .experience-table td {
            padding: 6px 4px;
            vertical-align: top;
        }

        .skills-table td:first-child,
        .education-table td:first-child,
        .experience-table td:first-child {
            width: 120px;
            font-weight: bold;
        }

        .footer {
            font-size: 12px;
            color: #777;
            text-align: center;
            margin-top: 20px;
            border-top: 1px solid #ccc;
            padding-top: 10px;
        }

        .bullet {
            display: inline-block;
            margin-right: 4px;
            font-weight: bold;
        }
    </style>
</head>
<body>
<div class="container">

    <!-- Header -->
    <table class="header-table">
        <tr>
            <td width="140">
                <img src="{{ public_path(str_replace(url('/'), '', $cv->avatar)) }}" alt="Profile Picture" class="profile-pic">
            </td>
            <td>
                <div class="name">{{ $cv->name }}</div>
                <div class="title">{{ $cv->designation }}</div>
            </td>
        </tr>
    </table>

    <!-- Contact -->
    <div class="section-title">Contact Me</div>
    <div class="section-content">
        <div class="contact-item">📞 {{ $cv->phone }}</div>
        <div class="contact-item">✉️ {{ $cv->email }}</div>
        <div class="contact-item">🔗 {{ $cv->website }}</div>
    </div>

    <!-- About Me -->
    <div class="section-title">About Me</div>
    <div class="section-content">
        {{ $cv->summary }}
    </div>

    <!-- Skills -->
    <div class="section-title">Personal Skills</div>
    <div class="section-content">
        <table class="skills-table">
            @foreach(array_map('trim', explode(',', $cv->personal_skills)) as $item)
                <tr><td><span class="bullet">•</span> {{ $item }}</td></tr>
            @endforeach
        </table>
    </div>

    <!-- Interests -->
    <div class="section-title">Interests</div>
    <div class="section-content">
        <table class="skills-table">
            @foreach(array_map('trim', explode(',', $cv->interests)) as $item)
                <tr><td><span class="bullet">•</span> {{ $item }}</td></tr>
            @endforeach
        </table>
    </div>

    <!-- Experience -->
    <div class="section-title">Experience</div>
    <div class="section-content">
        <table class="experience-table">
            @foreach($cv->experiences as $exp)
                <tr>
                    <td>{{ $exp['start_date'] }} - {{ (bool)$exp['is_present'] ? 'PRESENT' : $exp['end_date'] }}</td>
                    <td>
                        <strong>{{ $exp['company'] }}</strong> / <strong>{{ $exp['position'] }}</strong><br>
                        <span class="bullet">•</span> {{ $exp['description'] }}
                    </td>
                </tr>
            @endforeach
        </table>
    </div>

    <!-- Education -->
    <div class="section-title">Education</div>
    <div class="section-content">
        <table class="education-table">
            @foreach($cv->educations as $edu)
                <tr>
                    <td>{{ $edu['start_date'] ?? '' }} - {{ $edu['end_date'] ?? '' }}</td>
                    <td>
                        <strong>{{ $edu['institute'] }}</strong><br>
                        <span class="bullet">•</span> {{ $edu['department'] ?? '' }}
                    </td>
                </tr>
            @endforeach
        </table>
    </div>

    <!-- Language -->
    <div class="section-title">Languages</div>
    <div class="section-content">
        <table class="skills-table">
            @foreach(array_map('trim', explode(',', $cv->languages)) as $item)
                <tr><td><span class="bullet">•</span> {{ $item }}</td></tr>
            @endforeach
        </table>
    </div>

    <!-- References -->
    <div class="section-title">References</div>
    <div class="section-content">
        @foreach($cv->references as $reference)
            <div style="margin-bottom: 10px;">
                <strong>{{ $reference['name'] }}</strong><br>
                {{ $reference['company'] }} / {{ $reference['designation'] }}<br>
                Phone: {{ $reference['phone'] }}<br>
                Email: {{ $reference['email'] }}
            </div>
        @endforeach
    </div>

    <!-- Footer -->
    <div class="footer">
        Copy Right : https://dubaievisaservice.com &nbsp;&nbsp; | &nbsp;&nbsp;
        Apply Date: {{ $cv->created_at }} &nbsp;&nbsp; | &nbsp;&nbsp;
        Application No: {{ $cv->id }}
    </div>

</div>
</body>
</html>
