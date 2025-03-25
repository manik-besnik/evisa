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
        Schema::table('job_applies', function (Blueprint $table) {
            $table->string('email', 200)->nullable()->change();
            $table->string('religion')->nullable()->change();
            $table->string('blood_group')->nullable()->change();
            $table->string('marital_status')->nullable()->change();
            $table->string('permanent_district')->nullable()->change();
            $table->string('permanent_thana')->nullable()->change();
            $table->string('permanent_village')->nullable()->change();
            $table->string('passport_no')->nullable()->change();
            $table->string('passport_expiry')->nullable()->change();
            $table->string('country_contact_no')->nullable()->change();
            $table->string('visa_status')->nullable()->change();
            $table->string('visa_expiry')->nullable()->change();
            $table->string('whatsapp_no')->nullable()->change();
            $table->text('summary')->nullable()->change();
            $table->string('shirt_size')->nullable()->change();
            $table->string('pant_size')->nullable()->change();
            $table->string('show_size')->nullable()->change();
            $table->string('weight')->nullable()->change();
            $table->string('height')->nullable()->change();
            $table->string('nearest_airport')->nullable()->change();
        });

        Schema::table('educations', function (Blueprint $table) {
            $table->dropForeign(['mother_language']);
            $table->unsignedBigInteger('mother_language')->nullable()->change();
            $table->string('computer_skill')->nullable()->change();
            $table->string('driving_license')->nullable()->change();
            $table->string('driving_license_issue_date')->nullable()->change();
            $table->string('driving_license_expire_date')->nullable()->change();
            $table->string('english_proficiency')->nullable()->change();
            $table->string('arabic_proficiency')->nullable()->change();
            $table->string('urdu_proficiency')->nullable()->change();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
