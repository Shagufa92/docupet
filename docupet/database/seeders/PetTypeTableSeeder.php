<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class PetTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('pet_types')->insert([
            ['name' => 'Dog', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Cat', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ]);
    }
}
