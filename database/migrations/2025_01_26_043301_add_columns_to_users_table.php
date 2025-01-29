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
        Schema::table('users', function (Blueprint $table) {
            $table->string('profession')->after('avatar')->nullable();
            $table->foreignId('nationality_id')
                ->after('id')->nullable()
                ->constrained('countries')->cascadeOnDelete();
            $table->foreignId('living_country_id')
                ->after('nationality_id')->nullable()
                ->constrained('countries')->cascadeOnDelete();
            $table->foreignId('language_id')
                ->after('living_country_id')->nullable()
                ->constrained('languages')->cascadeOnDelete();
            $table->string('city')->after('profession')->nullable();
            $table->boolean('is_signup_complete')->default(1)->after('password');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
