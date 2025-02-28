<?php

namespace App\Http\Controllers;

use App\Supports\ApiResponse;
use Illuminate\Http\Request;

class ExtreactTextController extends Controller
{
    public function __invoke(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'file' => 'required|file|mimes:jpg,jpeg,png,pdf|max:12500',
        ]);

        $file = $request->file('file');

        try {
            $fileName = time() . '.' . $file->getClientOriginalExtension();
            $destinationPath = base_path('scripts');
            $file->move($destinationPath, $fileName);
            $filePath = $destinationPath . '/' . $fileName;
            $isPdf = $file->getClientOriginalExtension() === 'pdf';

            $data = $this->extractText($filePath, $isPdf);

            unlink($filePath);

            $passportData = json_decode($data, true);

            $expectedFields = ['name', 'passport_no', 'mother_name', 'birth_place', 'issue_date', 'expire_date'];
            foreach ($expectedFields as $field) {
                if (!isset($passportData[$field])) {
                    $passportData[$field] = null;
                }
            }

            $passportData = $this->cleanUpFields($passportData);

            return ApiResponse::success('Data processed successfully', ['passport_data' => $passportData]);
        } catch (\Exception $exception) {
            return ApiResponse::error('Passport file processing failed: ' . $exception->getMessage());
        }
    }

    public function extractText($filePath, $isPdf): false|string|null
    {

        $pythonScript = base_path('scripts/script.py');
        $escapedFilePath = escapeshellarg($filePath);
        $functionName = $isPdf ? 'extract_from_pdf' : 'extract_from_image';
        $command = "python3 \"$pythonScript\" $functionName $escapedFilePath";
        $output = shell_exec($command . ' 2>&1');
        return $output ?: null;
    }

    /**
     * Clean up extracted fields (remove Father, Spouse, and M/F from birth place)
     */
    public function cleanUpFields(array $passportData): array
    {

        if (isset($passportData['name'])) {
            $passportData['name'] = preg_replace('/\s*Father$/', '', $passportData['name']);
        }


        if (isset($passportData['mother_name'])) {
            $passportData['mother_name'] = preg_replace('/\s*Spouse$/', '', $passportData['mother_name']);
        }

        if (isset($passportData['birth_place'])) {
            $passportData['birth_place'] = preg_replace('/^[FM]\s*/', '', $passportData['birth_place']);
        }

        return $passportData;
    }
}
