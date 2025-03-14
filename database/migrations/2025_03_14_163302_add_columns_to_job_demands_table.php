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
        Schema::table('job_demands', function (Blueprint $table) {
            $table->string('job_location')->after('location_id')->nullable();
            $table->text('requirements')->after('thumbnail')->nullable();
            $table->boolean('is_approved')->after('requirements')->default(false);
            $table->boolean('is_new')->after('is_approved')->default(false);
            $table->boolean('is_on_demand')->after('is_new')->default(false);
            $table->dropColumn([
                'company_name',
                'contact_person',
                'contact_no',
                'whatsapp_no',
                'email',
                'current_address',
                'city', 'area'
            ]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('job_demands', function (Blueprint $table) {
            $table->dropColumn(['job_location', 'is_approved', 'is_new', 'is_on_demand', 'requirements']);
        });
    }
};
