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
        Schema::create('job_applies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('job_post_id')->constrained('job_posts')->cascadeOnDelete();
            $table->foreignId('education_id')->constrained('educations')->cascadeOnDelete();
            $table->string('name');
            $table->string('phone', 20)->nullable();
            $table->string('email', 100)->nullable();
            $table->string('shirt_size', 100)->nullable();
            $table->string('pant_size', 100)->nullable();
            $table->string('show_size', 100)->nullable();
            $table->string('weight', 100)->nullable();
            $table->string('height', 100)->nullable();
            $table->string('nearest_airport')->nullable();
            $table->json('documents')->nullable();
            $table->longText('summary')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_applies');
    }
};
