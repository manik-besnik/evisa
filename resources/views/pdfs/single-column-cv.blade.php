<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curriculum Vitae of {{$cv->name}}</title>
    <style>

        body {
            font-family: "Times New Roman", sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            line-height: 1.5;
        }

        .text-uppercase {
            text-transform: uppercase;
        }

        .container {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;
        }

        .header-left {
            width: 100%;
            display: block;
        }

        .cv-title {
            text-align: center;
        }

        .cv-title span{
            background-color: #2b4380;
            color: white;
            padding: 8px 30px;
            border-radius: 25px;
            font-size: 28px;
            margin: 10px auto;
            text-align: center;
        }
        .photo {
            position: absolute;
            top: 15px;
            right: 0;
            width: 150px;
            height: 150px;
            border: 1px solid #000;
            margin-left: 20px;
        }

        .personal-info {
            margin-top: 10px;
        }

        .personal-info h1 {
            margin: 0 0 5px 0;
            font-size: 18px;
            font-weight: bold;
        }

        .personal-info p {
            margin: 3px 0;
            font-size: 16px;
        }

        .email {
            color: #2b4380;
        }

        .section-header {
            position: relative;
            color: white;
            margin: 10px 0 5px 0;
            font-weight: bold;
            font-size: 14px;
        }

        .section-header span {
            padding: 5px 10px;
            background-color: #1d2951;
            margin-bottom: 5px;
        }

        .section-header:after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            display: block;
            width: 100%;
            border-bottom: 1px solid #000;
        }
        .center-header {
            background-color: #1d2951;
            color: white;
            padding: 5px 10px;
            margin: 10px 0 5px 0;
            font-weight: bold;
            font-size: 14px;
            text-align: center;
        }

        h3 {
            margin: 10px 0 5px 0;
            font-size: 16px;
            text-transform: uppercase;
        }

        .profile-text {
            margin: 5px 0;
            text-align: justify;
        }

        .skills-list p {
            margin: 5px 0;
        }

        .details-table {
            width: 100%;
            border-collapse: collapse;
            margin-left: 30px;
        }

        .details-table td {
            padding: 3px 0;
            vertical-align: top;
        }

        .details-table td:first-child {
            width: 180px;
        }

        .details-table td:nth-child(2) {
            width: 20px;
            text-align: center;
        }

        .bullet {
            display: inline-block;
            width: 12px;
            height: 12px;
            background-color: #2b4380;
            border-radius: 50%;
            margin-right: 8px;
        }

        .work-experience {
            margin: 5px 0 0 30px;
        }

        .work-item {
            margin: 5px 0;
            display: flex;
        }

        .work-bullet {
            margin-right: 8px;
        }

        .passport-table {
            width: 100%;
            border-collapse: collapse;
        }

        .passport-table td {
            padding: 3px 0;
        }

        .passport-table td:first-child {
            width: 120px;
        }

        .passport-table td:nth-child(2) {
            width: 20px;
            text-align: center;
        }

        .declaration {
            margin: 10px 0;
            text-align: justify;
        }

        .signature {
            text-align: right;
            margin-top: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="header">
        <div class="header-left">
            <div class="cv-title">
                <span>Curriculum Vitae</span>
            </div>
            <div class="personal-info">
                <h1 class="text-uppercase">{{$cv->name}}</h1>
                <p>Mobile: No. 000000000 (UAE)</p>
                <p>Email: <span class="email">mezbadblab@gmail.com</span></p>
{{--                <p>Dubai, UAE</p>--}}
            </div>
        </div>
        <div class="photo">
            <img src="/placeholder.svg?height=150&width=150" alt="Profile Photo" style="width:100%; height:100%;">
        </div>
    </div>

    <div class="center-header">POST APPLIED FOR  ANY SUITABLE JOB</div>

    <div>
        <h3>PROFILE</h3>
        <div class="profile-text">
            A Suitable position with an organization where I can utilize the best of my skills and abilities that fit to my education, skills and experience a place where an encourage and permitted to be an active participant as well vital contribute on development of the company.
        </div>
    </div>

    <div class="section-header">
        <span>PERSONAL SKILLS</span>
    </div>
    <div class="skills-list">
        <p>Very energetic oriented</p>
        <p>Physical mobility and stamina to do all tasks environment under supervision</p>
        <p>Extremely hardworking self motivated and able to work independently in a team environment under supervision</p>
        <p>Keep excellent inter personal relation with colleagues and ready to help them</p>
    </div>

    <div class="section-header">
        <span>PERSONAL DETAILS</span>
    </div>
    <table class="details-table">
        <tr>
            <td><span class="bullet"></span> Name</td>
            <td>:</td>
            <td>MOHAMMAD MEZBAHUDDIN</td>
        </tr>
        <tr>
            <td><span class="bullet"></span> Nationality</td>
            <td>:</td>
            <td>Bangladeshi</td>
        </tr>
        <tr>
            <td><span class="bullet"></span> Date of Birth</td>
            <td>:</td>
            <td>1988/10/10</td>
        </tr>
        <tr>
            <td><span class="bullet"></span> Gender</td>
            <td>:</td>
            <td>Male</td>
        </tr>
        <tr>
            <td><span class="bullet"></span> Marital Status</td>
            <td>:</td>
            <td>Married</td>
        </tr>
        <tr>
            <td><span class="bullet"></span> Religion</td>
            <td>:</td>
            <td>Muslim</td>
        </tr>
        <tr>
            <td><span class="bullet"></span> Language Known</td>
            <td>:</td>
            <td>Arabic, English, Hindi, Bengali</td>
        </tr>
    </table>

    <div class="section-header">
        <span>EDUCATIONAL QUALIFICATION</span>
    </div>
    <table class="details-table">
        <tr>
            <td><span class="bullet"></span> Academic</td>
            <td>:</td>
            <td>BBA (Accounting) - 2011-2007 passed</td>
        </tr>
        <tr>
            <td><span class="bullet"></span> Computer</td>
            <td>:</td>
            <td>Basic Computer Course</td>
        </tr>
    </table>

    <div class="section-header">
        <span>
            WORK EXPERIENCE
        </span>
    </div>
    <div class="work-experience">
        <div class="work-item">
            <div class="work-bullet">❖</div>
            <div>Bell Boy with WesteenHotel Dhaka, Bangladesh from March 2019 to January 2022</div>
        </div>
        <div class="work-item">
            <div class="work-bullet">❖</div>
            <div>Worked as a Marketing Executive in Bangladesh (4 years)</div>
        </div>
    </div>

    <div class="section-header">
        <span>PASSPORT DETAIL</span>
    </div>
    <table class="passport-table">
        <tr>
            <td>Passport No</td>
            <td>:</td>
            <td>A 03570809</td>
        </tr>
        <tr>
            <td>Place of Issue</td>
            <td>:</td>
            <td>Bangladesh</td>
        </tr>
        <tr>
            <td>Date of issue</td>
            <td>:</td>
            <td>2022/04/28</td>
        </tr>
        <tr>
            <td>Date of expiry</td>
            <td>:</td>
            <td>27/04/2032</td>
        </tr>
        <tr>
            <td>Visa Status</td>
            <td>:</td>
            <td>Visit Visa</td>
        </tr>
    </table>

    <div class="section-header text-uppercase">
        <span>
            DECLARATION
        </span>
    </div>
    <div class="declaration">
        I hereby certify that the above information are true and correct according to the best of my knowledge & My Experience. If selected I assure that I would perform to the best of my abilities, early awaiting a Positive response
    </div>

    <div class="signature text-uppercase">MOHAMMAD MEZBAHUDDIN</div>
</div>
</body>
</html>
