<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExtreactTextController extends Controller
{
    public function __invoke(Request $request): \Illuminate\Http\JsonResponse
    {
        // Validate the uploaded files
        $request->validate([
            'files.*' => 'required|file|mimes:jpg,jpeg,png,pdf|max:2048',
        ]);

        $paths = [];

        $file = $request->file('files');

        $fileName = time() . '.' . $file->getClientOriginalExtension();
        $destinationPath = public_path('uploads/ocr');
        $file->move($destinationPath, $fileName);


        $filePath = 'uploads/ocr/' . $fileName;
        $paths[] = $filePath;


        // Call the extractText method with the file paths
        $text = $this->extractText($paths);

        return response()->json(['data' => $text]);
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
