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
        Schema::table('user_cvs', function (Blueprint $table) {
            $table->string('mother_language')->nullable();
            $table->string('driving_license')->nullable();
            $table->string('driving_license_issue_date')->nullable();
            $table->string('driving_license_expire_date')->nullable();
            $table->string('english_proficiency')->nullable();
            $table->string('arabic_proficiency')->nullable();
            $table->string('urdu_proficiency')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('user_cvs', function (Blueprint $table) {
            //
        });
    }
};
