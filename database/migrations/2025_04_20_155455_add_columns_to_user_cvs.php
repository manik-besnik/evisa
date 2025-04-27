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
            $table->string('designation')->nullable()->after('summary');
            $table->string('date_of_birth')->nullable()->after('designation');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('user_cvs', function (Blueprint $table) {
            $table->dropColumn(['designation', 'date_of_birth']);
        });
    }
};
