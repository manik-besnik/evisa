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
        Schema::create('passports', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('visa_apply_id')->nullable();
            $table->foreignId('passport_issue_country')->comment('From which country passport issued')->constrained('countries')->cascadeOnDelete();
            $table->string('passport_type');
            $table->string('passport_no');
            $table->string('passport_issue_place');
            $table->string('passport_issue_place_arabic');
            $table->date('passport_issue_date');
            $table->date('passport_expire_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('passport_infos');
    }
};
