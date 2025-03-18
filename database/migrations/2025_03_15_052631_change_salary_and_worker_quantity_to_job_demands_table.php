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
            $table->string('worker_quantity',150)->change()->nullable();
            $table->string('salary',150)->change()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('job_demands', function (Blueprint $table) {
            //
        });
    }
};
