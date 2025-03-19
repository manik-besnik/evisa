<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_cvs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('mother_language')->constrained('languages')->cascadeOnDelete();
            $table->foreignId('nationality')->nullable()->constrained('countries')->cascadeOnDelete();
            $table->string('name');
            $table->string('phone', 20)->nullable();
            $table->string('avatar')->nullable();
            $table->string('email', 100)->nullable();
            $table->string('shirt_size', 100)->nullable();
            $table->string('pant_size', 100)->nullable();
            $table->string('show_size', 100)->nullable();
            $table->string('weight', 100)->nullable();
            $table->string('height', 100)->nullable();
            $table->string('nearest_airport')->nullable();
            $table->string('region')->nullable();
            $table->string('location')->nullable();
            $table->string('gender')->nullable();
            $table->string('religion')->nullable();
            $table->string('blood_group')->nullable();
            $table->string('marital_status')->nullable();
            $table->string('current_state')->nullable();
            $table->string('current_city')->nullable();
            $table->string('current_area')->nullable();
            $table->string('permanent_district')->nullable();
            $table->string('permanent_thana')->nullable();
            $table->string('permanent_village')->nullable();
            $table->string('passport_no')->nullable();
            $table->string('passport_expiry')->nullable();
            $table->string('country_contact_no')->nullable();
            $table->string('visa_status')->nullable();
            $table->string('visa_expiry')->nullable();
            $table->string('whatsapp_no')->nullable();
            $table->string('exam_name', 200);
            $table->string('passing_year', 50);
            $table->string('institute');
            $table->string('result', 10)->nullable();
            $table->string('computer_skill')->nullable();
            $table->string('driving_license')->nullable();
            $table->string('driving_license_issue_date')->nullable();
            $table->string('driving_license_expire_date')->nullable();
            $table->unsignedTinyInteger('english_proficiency')->default(1)->nullable();
            $table->unsignedTinyInteger('arabic_proficiency')->default(1)->nullable();
            $table->unsignedTinyInteger('urdu_proficiency')->comment('urdu/hindi language proficiency')->default(1)->nullable();
            $table->json('documents')->nullable();
            $table->json('experiences')->nullable();
            $table->longText('summary')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_c_v_s');
    }
};
