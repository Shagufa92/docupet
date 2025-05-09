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
        Schema::create('pets', function (Blueprint $table) {
            $table->id();  
            $table->string('name');  
            $table->integer('age'); 
            $table->enum('gender', ['Male', 'Female']);
            $table->date('dob')->nullable(); 
            $table->foreignId('pet_type_id')->constrained('pet_types')->onDelete('cascade');  
            $table->foreignId('breed_id')->nullable()->constrained('pet_breeds')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pets');
    }
};
