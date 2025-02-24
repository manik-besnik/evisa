<?php

namespace App\Http\Controllers;

use App\Supports\ApiResponse;
use Illuminate\Support\Facades\Storage;
use App\Supports\PassportDataExtractor;
use Illuminate\Http\Request;
use thiagoalessio\TesseractOCR\TesseractOCR;
use thiagoalessio\TesseractOCR\TesseractOcrException;
use Spatie\PdfToImage\Pdf;

class ExtreactTextController extends Controller
{
    /**
     */
    public function __invoke(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'files.*' => 'required|file|mimes:jpg,jpeg,png,pdf|max:2048',
        ]);

        $file = $request->file('files');

        try {
            $fileName = time() . '.' . $file->getClientOriginalExtension();
            $destinationPath = public_path('uploads/ocr');
            $file->move($destinationPath, $fileName);

            $filePath = 'uploads/ocr/' . $fileName;

            if ($file->getClientOriginalExtension() === 'pdf') {
                $imagePaths = $this->convertPdfToImages($filePath);
                $data = [];
                foreach ($imagePaths as $imagePath) {
                    $data[] = $this->extract($imagePath);
                    unlink($imagePath);
                }
            } else {
                $data = $this->extract($filePath);
            }

            unlink($filePath); // Remove uploaded file after processing

            return ApiResponse::success('Data processed successfully', ['passport_data' => $data]);
        } catch (\Exception $exception) {
            return ApiResponse::error('Passport file processing failed');
        }
    }

    private function convertPdfToImages(string $pdfPath): array
    {
        $pdf = new Pdf($pdfPath);
        $outputPaths = [];

        for ($i = 1; $i <= $pdf->getNumberOfPages(); $i++) {
            $imagePath = public_path("uploads/ocr/" . time() . "_page_{$i}.jpg");
            $pdf->setPage($i)->saveImage($imagePath);
            $outputPaths[] = $imagePath;
        }

        return $outputPaths;
    }

//    /**
//     * @throws TesseractOcrException
//     */
//
//    private function extract(string $imageUrl): array
//    {
//        $tesseract = new TesseractOCR($imageUrl);
//        $tesseract->lang('eng');
//
//        $text = $tesseract->run();
//
//        // Normalize text to remove OCR noise
//        $cleanText = preg_replace('/[^A-Za-z0-9\s\-\:]/', '', $text);
//
//        // Extract passport number
//        preg_match('/P BGD (\w+)/', $cleanText, $passportMatch);
//        $passportNo = $passportMatch[1] ?? 'Not Found';
//
//        // Extract issue date
//        preg_match('/Date of Issue\s*[:\-]?\s*(\d{1,2} \w{3} \d{4})/i', $cleanText, $issueMatch);
//        $issueDate = $issueMatch[1] ?? 'Not Found';
//
//        // Extract expiry date
//        preg_match('/Date of Expiry\s*[:\-]?\s*(\d{1,2} \w{3} \d{4})/i', $cleanText, $expiryMatch);
//        $expiryDate = $expiryMatch[1] ?? 'Not Found';
//
//        return [
//            'passport_no' => $passportNo,
//            'issue_date' => $issueDate,
//            'expire_date' => $expiryDate,
//            'text' => $text // Keep original text for debugging
//        ];
//    }

//    /**
//     * @throws TesseractOcrException
//     */
//    private function extract(string $imageUrl): array
//    {
//        $tesseract = new TesseractOCR($imageUrl);
//        $tesseract->lang('eng');
//
//        $text = $tesseract->run();
//        // Clean the text: remove all unwanted characters that could interfere with date regex
//        $text = preg_replace('/[^\w\s:\/.-]/', '', $text);  // Allow words, spaces, and basic date punctuation
//
//        // Extract passport number
//        preg_match('/P BGD\s+([A-Z0-9]+)/i', $text, $passportMatch);
//        $passportNo = $passportMatch[1] ?? 'Not Found';
//
//        // Match the Issue Date (format: 13 NOV 2022)
//        preg_match('/Date\s*of\s*Issue\s*[:\-]?\s*(\d{1,2}\s+[A-Za-z]{3}\s+\d{4})/i', $text, $issueMatch);
//        $issueDate = isset($issueMatch[1]) ? trim($issueMatch[1]) : 'Not Found';
//
//// Match the Expiry Date (format: 12 NOV 2032)
//        preg_match('/Date\s*of\s*Expiry\s*[:\-]?\s*(\d{1,2}\s+[A-Za-z]{3}\s+\d{4})/i', $text, $expiryMatch);
//        $expiryDate = isset($expiryMatch[1]) ? trim($expiryMatch[1]) : 'Not Found';
//
//
//        return [
//            'passport_no' => $passportNo,
//            'issue_date' => $issueDate,
//            'expire_date' => $expiryDate,
//            'text' => $text,
//            'match' => [$issueMatch,$expiryMatch]
//        ];
//    }


    /**
     * @throws TesseractOcrException
     */
    private function extract(string $imageUrl): array
    {
        $tesseract = new TesseractOCR($imageUrl);
        $tesseract->lang('eng');
        $text = $tesseract->run();

        return (new PassportDataExtractor())->extractData($text);
    }

    private function extractText(array $filePaths): string
    {

        $pythonScript = base_path('scripts/extreact.py');
        $filePaths = array_map('escapeshellarg', $filePaths);
        $command = "python3 \"$pythonScript\" " . implode(" ", $filePaths);

        $output = shell_exec($command . ' 2>&1');

        return $output ?: 'Text extraction failed.';
    }

}
