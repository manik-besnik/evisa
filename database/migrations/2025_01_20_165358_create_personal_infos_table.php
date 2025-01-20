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
        Schema::create('personal_infos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('current_nationality')->constrained('countries')->cascadeOnDelete();
            $table->foreignId('prev_nationality')->constrained('countries')->cascadeOnDelete();
            $table->foreignId('birth_country')->constrained('countries')->cascadeOnDelete();
            $table->string('name')->comment('Full Name');
            $table->string('name_arabic')->comment('Full Name Arabic');
            $table->string('birth_place');
            $table->string('birth_place_arabic');
            $table->string('mother_name')->nullable();
            $table->string('mother_name_arabic')->nullable();
            $table->string('father_name')->nullable();
            $table->string('father_name_arabic')->nullable();
            $table->string('religion');
            $table->string('faith')->nullable();
            $table->string('qualification')->nullable();
            $table->string('profession')->nullable();
            $table->unsignedTinyInteger('marital_status')->comment('\App\Enums\MaritalStatus');
            $table->unsignedTinyInteger('gender')->comment('\App\Enums\Gender');
            $table->date('date_of_birth');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personal_infos');
    }
};
