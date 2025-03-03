<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Visa Applications</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 12px;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
        }

        .header h1 {
            color: #333;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        table,
        th,
        td {
            border: 1px solid #ddd;
        }

        th,
        td {
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }

        .application-details {
            margin-bottom: 30px;
            page-break-inside: avoid;
        }

        .footer {
            text-align: center;
            font-size: 10px;
            color: #666;
            margin-top: 20px;
        }
    </style>
</head>

<body>
    <div class="header">
        <h1>Visa Applications</h1>
        <p>Generated on: {{ date('Y-m-d H:i:s') }}</p>
    </div>

    @foreach ($applications as $application)
        <div class="application-details">
            <h2>Application #{{ $application->id }} - {{ $application->name }}</h2>

            <table>
                <tr>
                    <th>Name</th>
                    <td>{{ $application->name }}</td>
                </tr>
                <tr>
                    <th>Passport Number</th>
                    <td>{{ $application->passport->passport_no ?? 'N/A' }}</td>
                </tr>
                <tr>
                    <th>Status</th>
                    <td>{{ $application->status }}</td>
                </tr>
                <tr>
                    <th>Created Date</th>
                    <td>{{ $application->created_at->format('Y-m-d') }}</td>
                </tr>
                <!-- Add more fields as needed based on your application data -->
            </table>
        </div>

        @if (!$loop->last)
            <div style="page-break-after: always;"></div>
        @endif
    @endforeach

    <div class="footer">
        <p>E-Visa Dubai - Confidential</p>
    </div>
</body>

</html>
