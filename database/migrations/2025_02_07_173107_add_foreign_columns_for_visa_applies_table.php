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
        Schema::table('visa_applies', function (Blueprint $table) {
            $table->foreignId('personal_info_id')->after('user_id')->nullable();
            $table->foreignId('passport_id')->after('personal_info_id')->nullable();
            $table->foreignId('guarantor_id')->after('passport_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('visa_applies', function (Blueprint $table) {
            $table->dropForeign(['personal_info_id', 'passport_id', 'guarantor_id']);
            $table->dropColumn(['personal_info_id', 'passport_id', 'guarantor_id']);
        });
    }
};
