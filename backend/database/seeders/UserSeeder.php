<?php

namespace Database\Seeders;

use App\Models\Advance;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table(User::TABLE)->insert([
            'full_name' => 'Кирилл',
            'phone_number' => '+79298952719',
            'email' => 'test_1810@mail.ru',
            'password' => Hash::make('password'),
            'advance_id' => Advance::factory()->create()->id,
        ]);
    }
}
