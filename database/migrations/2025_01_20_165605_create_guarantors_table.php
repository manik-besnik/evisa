<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('guarantors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('visa_apply_id')->nullable();
            $table->foreignId('nationality')->constrained('countries')->cascadeOnDelete();
            $table->string('name');
            $table->string('passport_no')->nullable();
            $table->string('phone')->nullable();
            $table->string('relation')->comment('Relation with Visa Applicant')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('guarantor_infos');
    }
};
