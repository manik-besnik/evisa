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
            $table->dropForeign('user_cvs_mother_language_foreign');
            $table->dropColumn(['mother_language','shirt_size','pant_size','show_size','weight','height','nearest_airport','region','location','country_contact_no','whatsapp_no','exam_name','passing_year','institute','result','driving_license','driving_license_issue_date','driving_license_expire_date','english_proficiency','arabic_proficiency','urdu_proficiency','documents']);
            $table->json('educations')->after('experiences')->nullable();
            $table->json('references')->after('educations')->nullable();
            $table->string('website')->after('email')->nullable();
            $table->string('languages')->after('website')->nullable();
            $table->string('personal_skills')->after('languages')->nullable();
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
