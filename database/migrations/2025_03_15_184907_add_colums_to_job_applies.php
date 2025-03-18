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
            $table->dropForeign(['job_post_id']);
            $table->dropColumn('job_post_id');
            $table->foreignId('nationality')->nullable()->after('education_id');
            $table->foreignId('job_demand_id')->nullable()->after('nationality');
            $table->json('job_posts')->nullable()->after('nearest_airport');
            $table->string('region')->nullable()->after('job_posts');
            $table->string('location')->nullable()->after('region');
            $table->string('gender')->nullable()->after('location');
            $table->string('religion')->nullable()->after('gender');
            $table->string('blood_group')->nullable()->after('religion');
            $table->string('marital_status')->nullable()->after('blood_group');
            $table->string('current_state')->nullable()->after('marital_status');
            $table->string('current_city')->nullable()->after('current_state');
            $table->string('current_area')->nullable()->after('current_city');
            $table->string('permanent_district')->nullable()->after('current_area');
            $table->string('permanent_thana')->nullable()->after('permanent_district');
            $table->string('permanent_village')->nullable()->after('permanent_thana');
            $table->string('passport_no')->nullable()->after('permanent_village');
            $table->string('passport_expiry')->nullable()->after('passport_no');
            $table->string('country_contact_no')->nullable()->after('passport_expiry');
            $table->string('visa_status')->nullable()->after('country_contact_no');
            $table->string('visa_expiry')->nullable()->after('visa_status');
            $table->string('whatsapp_no')->nullable()->after('visa_expiry');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('job_applies', function (Blueprint $table) {
            $table->foreignId('job_post_id')->nullable()->after('education_id');
            $table->dropColumn(['nationality', 'nationality', 'job_posts', 'region', 'location', 'gender', 'religion', 'blood_group', 'marital_status', 'current_state', 'current_city', 'current_area', 'permanent_district',]);
        });
    }
};
