<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class BreedsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('pet_breeds')->insert([
            ['name' => 'Pitbull', 'pet_type_id' => 1, 'is_dangerous' => true, 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Mastiff', 'pet_type_id' => 1, 'is_dangerous' => true, 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Golden Retriever', 'pet_type_id' => 1, 'is_dangerous' => false, 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Labrador', 'pet_type_id' => 1, 'is_dangerous' => false, 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Siamese', 'pet_type_id' => 2, 'is_dangerous' => false, 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Persian', 'pet_type_id' => 2, 'is_dangerous' => false, 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Maine Coon', 'pet_type_id' => 2, 'is_dangerous' => false, 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ]);
    }
}
