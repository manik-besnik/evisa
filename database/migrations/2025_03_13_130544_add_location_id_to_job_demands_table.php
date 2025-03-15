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
        Schema::table('job_demands', function (Blueprint $table) {
            $table->unsignedBigInteger('location_id')->after('company_id')->nullable();
            $table->string('education')->after('holiday_benefits')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('job_demands', function (Blueprint $table) {
            $table->dropColumn(['location_id','education']);
        });
    }
};
