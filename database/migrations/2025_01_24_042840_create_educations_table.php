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
        Schema::create('educations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('mother_language')->constrained('languages')->cascadeOnDelete();
            $table->string('exam_name',200);
            $table->string('passing_year',50);
            $table->string('institute');
            $table->string('computer_skill')->nullable();
            $table->string('driving_license')->nullable();
            $table->string('driving_license_issue_date')->nullable();
            $table->string('driving_license_expire_date')->nullable();
            $table->unsignedTinyInteger('english_expertise')->default(1)->nullable();
            $table->unsignedTinyInteger('arabic_expertise')->default(1)->nullable();
            $table->unsignedTinyInteger('urdu_expertise')->comment('urdu/hindi language expertise')->default(1)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('educations');
    }
};
