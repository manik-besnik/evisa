<?php

namespace App\Supports;

use Illuminate\Http\JsonResponse;

class ApiResponse
{
    public static function success(string $message, array $data = ['data' => null], int $statusCode = 200): JsonResponse
    {
        $default = [
            'message' => $message,
            'status_code' => $statusCode,
            'success' => true
        ];
        return response()->json([
            ...$data,
            ...$default
        ]);
    }

    public static function error(string $message, array $data = ['data' => null], int $statusCode = 422): JsonResponse
    {
        $default = [
            'message' => $message,
            'status_code' => $statusCode,
            'success' => false
        ];

        return response()->json([
            ...$data,
            ...$default
        ]);
    }
}
