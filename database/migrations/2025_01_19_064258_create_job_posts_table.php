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
        Schema::create('job_posts', function (Blueprint $table) {
            $table->id();
            $table->unsignedTinyInteger('type')
                ->comment('1=> Full Time 2=> Part Time')
                ->default(\App\Enums\JobType::FULL_TIME->value);
            $table->string('title');
            $table->string('thumbnail')->nullable();
            $table->string('salary_range');
            $table->string('location')->nullable();
            $table->longText('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_posts');
    }
};
