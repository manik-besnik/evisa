<?php

namespace App\Supports;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;

class FileUpload
{
    public static function execute(UploadedFile $uploadedFile, string|null $oldFilePath = null, string|null $destinationPath = null): string|null
    {
        $file = $uploadedFile;

        try {

            if ($oldFilePath && strpos($oldFilePath, request()->getSchemeAndHttpHost() != false)) {
                $filePath = str_replace(request()->getSchemeAndHttpHost() . '/', '', $oldFilePath);
                $fullPath = public_path($filePath);

                if (File::exists($fullPath)) {
                    File::delete($fullPath);
                }
            }

            if (!$destinationPath) {
                $destinationPath = 'uploads';
            }

            if (!(bool)config('services.local_environment')) {
                $destinationPath = 'public/' . $destinationPath;
            }

            $fileName = uniqid() . '-' . time() . '.' . $file->getClientOriginalExtension();

            $file->move(public_path($destinationPath), $fileName);

            $filePath = $destinationPath . '/' . $fileName;

            return request()->getSchemeAndHttpHost() . '/' . $filePath;

        } catch (\Exception $exception) {
            return $oldFilePath;
        }
    }

    public static function delete(string|null $file = null): bool
    {
        if ($file && strpos($file, request()->getSchemeAndHttpHost() != false)) {
            $filePath = str_replace(request()->getSchemeAndHttpHost() . '/', '', $file);
            $fullPath = public_path($filePath);

            if (File::exists($fullPath)) {
                File::delete($fullPath);
            }

            return true;
        }

        return false;
    }
}
