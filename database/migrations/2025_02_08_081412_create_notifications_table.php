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
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('notified_by')->constrained('users')->cascadeOnDelete();
            $table->foreignId('notify_to')->constrained('users')->cascadeOnDelete();
            $table->string('title');
            $table->string('type')->nullable();
            $table->unsignedTinyInteger('user_type')->default(\App\Enums\Role::ADMIN->value);
            $table->json('payload')->nullable();
            $table->timestamp('seen_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};
