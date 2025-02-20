<?php

namespace App\Supports;

class PassportDataExtractor
{
    private ?string $data = null;

    public function extractData(?string $data = null): array
    {
        $this->data = $data;

        return [
            'name' => $this->extractName(),
            'passport_no' => $this->extractPassportNo(),
            'father_name' => $this->extractFatherName(),
            'mother_name' => $this->extractMotherName(),
            'spouse_name' => $this->extractSpouseName(),
            'permanent_address' => $this->extractPermanentAddress(),
            'nationality' => $this->extractNationality(),
            'personal_no' => $this->extractPersonalNo(),
            'date_of_birth' => $this->extractDateOfBirth(),
            'place_of_birth' => $this->extractPlaceOfBirth(),
            'issue_date' => $this->extractIssueDate(),
            'expiry_date' => $this->extractExpiryDate(),
            'emergency_contact' => $this->extractEmergencyContact(),
            'text' => $data
        ];
    }

    private function extractName(): ?string
    {
        $patterns = [
            "/(?:Name|Given Name|Holder's Name):?\s*([A-Z ]+)/i"
        ];

        return $this->extractDataFromPatterns($patterns);
    }

    private function extractPassportNo(): ?string
    {
        $patterns = [
            '/Passport No\.?\s*[:\s]*([A-Z0-9]{8,20})/i',
            '/P<BGD([A-Z0-9]{8,20})/i',
            '/Passport No\.?\s*[:\s]*([A-Z0-9]+)/i',
            '/Passport No.?[:\s]*([A-Z0-9]+)[\s\|\/]*/i'
        ];

        return $this->extractDataFromPatterns($patterns);
    }

    private function extractFatherName(): ?string
    {
        $patterns = [
            '/Father(?:\'s)? Name:?\s*([A-Z ]+)/i'
        ];

        return $this->extractDataFromPatterns($patterns);
    }

    private function extractMotherName(): ?string
    {
        $patterns = [
            '/Mother(?:\'s)? Name:?\s*([A-Z ]+)/i'
        ];

        return $this->extractDataFromPatterns($patterns);
    }

    private function extractSpouseName(): ?string
    {
        $patterns = [
            '/Spouse(?:\'s)? Name:?\s*([A-Z ]+)/i'
        ];

        return $this->extractDataFromPatterns($patterns);
    }

    private function extractPermanentAddress(): ?string
    {
        $patterns = [
            '/Permanent Address:?\s*([A-Z0-9, -]+)/i'
        ];

        return $this->extractDataFromPatterns($patterns);
    }

    private function extractNationality(): ?string
    {
        $patterns = [
            '/Nationality:?\s*([A-Z ]+)/i'
        ];

        return $this->extractDataFromPatterns($patterns);
    }

    private function extractPersonalNo(): ?string
    {
        $patterns = [
            '/Personal No.?[:\s]+([0-9]+)/i',
            '/Personal No\.?[:\s]+([A-Z0-9]+)/i',
            '/ID No.?[:\s]+([0-9]+)/i',
            '/Personal Number:?[:\s]+([0-9]+)/i'
        ];

        return $this->extractDataFromPatterns($patterns);
    }

    private function extractDateOfBirth(): ?string
    {
        $patterns = [
            '/Date of Birth:?\s*([0-9]{1,2} [A-Z]{3} [0-9]{4})/i'
        ];

        return $this->extractDataFromPatterns($patterns);
    }

    private function extractPlaceOfBirth(): ?string
    {
        $patterns = [
            '/Place of Birth:?\s*([A-Z ]+)/i'
        ];

        return $this->extractDataFromPatterns($patterns);
    }

    private function extractIssueDate(): ?string
    {
        $patterns = [
            '/Date of Issue:?\s*([0-9]{1,2} [A-Z]{3} [0-9]{4})/i'
        ];

        return $this->extractDataFromPatterns($patterns);
    }

    private function extractExpiryDate(): ?string
    {
        $patterns = [
            '/Date of Expiry:?\s*([0-9]{1,2} [A-Z]{3} [0-9]{4})/i'
        ];

        return $this->extractDataFromPatterns($patterns);
    }

    private function extractEmergencyContact(): ?string
    {
        $patterns = [
            '/Emergency Contact:?\s*([A-Z0-9, -]+)/i'
        ];

        return $this->extractDataFromPatterns($patterns);
    }

    private function extractDataFromPatterns(array $patterns): ?string
    {
        foreach ($patterns as $pattern) {
            $result = $this->matchPattern($pattern);
            if ($result) {
                return $result;
            }
        }
        return null;
    }

    private function matchPattern(string $pattern): ?string
    {
        if ($this->data && preg_match($pattern, $this->data, $matches)) {
            return trim($matches[1]);
        }
        return null;
    }
}
