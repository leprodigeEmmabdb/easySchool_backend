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
        Schema::create('autres', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->longText("description");
            $table->json("questionnaire")->nullable();
            $table->string("type");
            $table->string("path");
            $table->foreignId('admin_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('autres');
    }
};
