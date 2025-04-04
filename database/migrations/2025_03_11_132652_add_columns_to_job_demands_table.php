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
            $table->foreignId('company_id')
                ->after('user_id')
                ->constrained('companies')
                ->cascadeOnDelete();
            $table->string('thumbnail')->after('note')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('job_demands', function (Blueprint $table) {
            $table->dropForeign('job_demands_company_id_foreign');
            $table->dropColumn(['company_id', 'thumbnail']);
        });
    }
};
