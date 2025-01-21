<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * @property int $id
 * @property int $user_id
 * @property int $personal_info_id
 * @property int $passport_id
 * @property int $guarantor_id
 * @property int $processing_type
 * @property int $visa_type
 * @property int $group
 * @property int $status
 * @property string $name
 * @property string $documents
 */
return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('visa_applies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('personal_info_id')->nullable();
            $table->foreignId('passport_id')->nullable();
            $table->foreignId('guarantor_id')->nullable();
            $table->foreignId('applied_by')->nullable();
            $table->unsignedTinyInteger('processing_type')->comment('\App\Enums\VisaProcessingType');
            $table->unsignedTinyInteger('visa_type')->comment('\App\Enums\VisaType');
            $table->unsignedTinyInteger('group')->comment('\App\Enums\Group');
            $table->unsignedTinyInteger('status')->comment('\App\Enums\VisaStatus')->default(\App\Enums\VisaStatus::PENDING->value);
            $table->string('name');
            $table->string('visa_document')->nullable();
            $table->json('documents')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('visa_applies');
    }
};
