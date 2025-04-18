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
                    <img src="/placeholder.svg?height=140&width=140" alt="Profile" class="profile-image">
                </div>
            </div>
        </div>

        <div class="name-title">
            <h1 class="name">Esther</h1>
            <h1 class="name">Smith</h1>
            <h2 class="title">MARKETING MANAGER</h2>
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
                    <div class="contact-text">+123-456-7890</div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">✉️</div>
                    <div class="contact-text">hello@reallygreatsite.com</div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">📍</div>
                    <div class="contact-text">123 Anywhere St., Any City</div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">🔗</div>
                    <div class="contact-text">www.reallygreatsite.com</div>
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
                <div class="skill-item">
                    <span class="bullet">•</span>
                    <span>Personal Banking</span>
                </div>
                <div class="skill-item">
                    <span class="bullet">•</span>
                    <span>Customer Service</span>
                </div>
                <div class="skill-item">
                    <span class="bullet">•</span>
                    <span>Finance</span>
                </div>
                <div class="skill-item">
                    <span class="bullet">•</span>
                    <span>Communication</span>
                </div>
                <div class="skill-item">
                    <span class="bullet">•</span>
                    <span>Negotiation</span>
                </div>
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
                <div class="interest-item">
                    <span class="bullet">•</span>
                    <span>Swaiming</span>
                </div>
                <div class="interest-item">
                    <span class="bullet">•</span>
                    <span>Travikibg</span>
                </div>
                <div class="interest-item">
                    <span class="bullet">•</span>
                    <span>Songs</span>
                </div>
                <div class="interest-item">
                    <span class="bullet">•</span>
                    <span>Reading</span>
                </div>
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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure autem vel eum iriure dolor in hendrerit in vulputate velit
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="icon-circle">
                    <span class="icon">💼</span>
                </div>
                <div class="header-text">Experience</div>
            </div>

            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">2030 - PRESENT</div>
                    <div class="timeline-separator"></div>
                    <div class="timeline-dot"></div>
                    <div>
                        <div class="flex">
                            <div class="timeline-company">Borcelle Studio</div>
                            <div class="timeline-position">Marketing Manager & Specialist</div>
                        </div>
                        <div class="timeline-description">
                            • Develop and execute comprehensive marketing strategies and campaigns that align with the company's goals and objectives.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="icon-circle">
                    <span class="icon">📚</span>
                </div>
                <div class="header-text">Education</div>
            </div>

            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">2029 - 2030</div>
                    <div class="timeline-separator"></div>
                    <div class="timeline-dot"></div>
                    <div>
                        <div class="flex">
                            <div class="timeline-company">WARDIERE UNIVERSITY</div>
                        </div>
                        <div class="timeline-description">
                            • Master of Business Management
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="icon-circle">
                    <span class="icon">🗣️</span>
                </div>
                <div class="header-text">Language</div>
            </div>

            <div class="language-list">
                <div>Arabic</div>
                <div>English</div>
                <div>Hindi</div>
                <div>Urdu</div>
                <div>French</div>
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
                <div class="reference-item">
                    <div class="reference-name">Estelle Darcy</div>
                    <div class="reference-position">Wardiere Inc. / CTO</div>
                    <div>Phone: 123-456-7890</div>
                    <div>Email: hello@reallygreatsite.com</div>
                </div>

                <div class="reference-item">
                    <div class="reference-name">Harper Richard</div>
                    <div class="reference-position">Wardiere Inc. / CEO</div>
                    <div>Phone: 123-456-7890</div>
                    <div>Email: hello@reallygreatsite.com</div>
                </div>
            </div>
        </div>

    </div>

</div>

<div class="footer">
    Copy Right : www.evisaservice.com _ Apply Date : 22/11/2022   Application No. 3000
</div>
</body>
</html>
