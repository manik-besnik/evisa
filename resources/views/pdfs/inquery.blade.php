<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Inquery PDF</title>
    <style>
        body {
            font-family: DejaVu Sans, sans-serif;
            font-size: 12px;
        }
        h1 {
            text-align: center;
            margin-bottom: 30px;
        }
        .section-title {
            font-weight: bold;
            font-size: 16px;
            margin-top: 30px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }
        th, td {
            border: 1px solid #000;
            padding: 6px;
            text-align: left;
        }
        td strong {
            display: inline-block;
            min-width: 120px;
        }
    </style>
</head>
<body>

    <h1>Inquery Report</h1>

    <div class="section-title">Inquery Details</div>
    <table>
        <tbody>
            <tr>
                <td><strong>Name</strong></td>
                <td>{{ $inquery->name }}</td>
            </tr>
            <tr>
                <td><strong>Email</strong></td>
                <td>{{ $inquery->email }}</td>
            </tr>
            <tr>
                <td><strong>Phone</strong></td>
                <td>{{ $inquery->phone }}</td>
            </tr>
            <tr>
                <td><strong>WhatsApp</strong></td>
                <td>{{ $inquery->whatsapp }}</td>
            </tr>
            <tr>
                <td><strong>Location</strong></td>
                <td>{{ $inquery->location }}</td>
            </tr>
            <tr>
                <td><strong>Visa Type</strong></td>
                <td>{{ $inquery->visa_type }}</td>
            </tr>
            <tr>
                <td><strong>Message</strong></td>
                <td>{{ $inquery->message }}</td>
            </tr>
            <tr>
                <td><strong>Date</strong></td>
                <td>{{ \Carbon\Carbon::parse($inquery->created_at)->format('d-m-Y') }}</td>
            </tr>
        </tbody>
    </table>

    <div class="section-title">Attached Documents</div>
    <table>
        <thead>
            <tr>
                <th>SL</th>
                <th>Document Name</th>
                <th>File URL</th>
            </tr>
        </thead>
        <tbody>
            @php
                $documents = $inquery->documents;
            @endphp


            @if(!empty($documents))
                @foreach($documents as $index => $doc)
                    <tr>
                        <td>{{ $index + 1 }}</td>
                        <td>{{ $doc['name'] ?? 'Untitled' }}</td>
                        <td>{{ $doc['url'] }}</td>
                    </tr>
                @endforeach
            @else
                <tr>
                    <td colspan="3">No documents attached.</td>
                </tr>
            @endif
        </tbody>
    </table>

</body>
</html>
