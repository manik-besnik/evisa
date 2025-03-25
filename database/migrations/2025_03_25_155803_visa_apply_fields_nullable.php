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
        Schema::table('guarantors', function (Blueprint $table) {
            $table->dropForeign(['nationality']);
            $table->unsignedBigInteger('nationality')->nullable()->change();
        });
        Schema::table('passports', function (Blueprint $table) {
            $table->dropForeign(['passport_issue_country']);
            $table->unsignedBigInteger('passport_issue_country')->nullable()->change();
            $table->string('passport_type')->nullable()->change();
            $table->string('passport_issue_place')->nullable()->change();
            $table->string('passport_issue_place_arabic')->nullable()->change();
            $table->string('passport_issue_date')->nullable()->change();
            $table->string('passport_expire_date')->nullable()->change();
        });
        Schema::table('personal_infos', function (Blueprint $table) {
            $table->dropForeign(['prev_nationality']);
            $table->dropForeign(['birth_country']);
            $table->unsignedBigInteger('prev_nationality')->nullable()->change();
            $table->unsignedBigInteger('birth_country')->nullable()->change();
            $table->unsignedInteger('marital_status')->nullable()->change();
            $table->string('birth_place')->nullable()->change();
            $table->string('birth_place_arabic')->nullable()->change();
            $table->string('faith')->nullable()->change();
            $table->string('profession')->nullable()->change();
        });
        Schema::table('visa_applies', function (Blueprint $table) {
            $table->string('group')->nullable()->change();
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
