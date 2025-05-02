<?php

namespace App\Exports;

use App\Models\VisaApply;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class VisaApplicationsExport implements FromCollection, WithHeadings, WithMapping, ShouldAutoSize, WithStyles
{
    protected $ids;

    public function __construct(array $ids)
    {
        $this->ids = $ids;
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return VisaApply::whereIn('id', $this->ids)->get();
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'ID',
            'Name',
            'Passport No',
            'Status',
            'Created Date',
        ];
    }

    /**
     * @param mixed $row
     *
     * @return array
     */
    public function map($row): array
    {
        return [
            $row->id,
            $row->name,
            $row->passport ? $row->passport->passport_no : 'N/A',
            $this->getStatus($row->status),
            $row->created_at->format('Y-m-d'),
        ];
    }

    /**
     * Get the status label
     */
    private function getStatus($status)
    {
        // You can implement your status conversion logic here
        // Similar to your getValue(visaStatuses, application.status) function
        $statuses = [
            // Define your status mappings here based on your visaStatuses constant
            // For example:
            // 1 => 'Pending',
            // 2 => 'Approved',
            // 3 => 'Rejected',
        ];

        return $statuses[$status] ?? $status;
    }

    /**
     * @param Worksheet $sheet
     */
    public function styles(Worksheet $sheet)
    {
        return [
            // Style the first row (headers) as bold
            1 => ['font' => ['bold' => true]],
        ];
    }
}
