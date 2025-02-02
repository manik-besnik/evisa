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
        Schema::create('job_demands', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->date('date')->nullable();
            $table->string('job_code')->nullable();
            $table->string('apply_from')->nullable();
            $table->string('type_of_work')->nullable();
            $table->string('visa_validity')->nullable();
            $table->decimal('salary', 10, 2)->nullable();
            $table->integer('worker_quantity')->nullable();
            $table->string('duty_hours')->nullable();
            $table->string('over_time')->nullable();
            $table->string('weekly_work')->nullable();
            $table->string('age_limit')->nullable();
            $table->text('qualifications')->nullable();
            $table->text('company_activities')->nullable();
            $table->string('food')->nullable();
            $table->string('accommodation')->nullable();
            $table->string('transport')->nullable();
            $table->string('yearly_ticket')->nullable();
            $table->text('holiday_benefits')->nullable();
            $table->text('note')->nullable();
            $table->string('company_name')->nullable();
            $table->string('contact_person')->nullable();
            $table->string('contact_no')->nullable();
            $table->string('whatsapp_no')->nullable();
            $table->string('email')->nullable();
            $table->string('current_address')->nullable();
            $table->string('city')->nullable();
            $table->string('area')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_demands');
    }
};
