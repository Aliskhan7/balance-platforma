<?php

namespace Database\Seeders;

use App\Models\Achievement;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class AchievementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0;$i<100;$i++) {
            DB::table('achievement_user')->insert([
                'user_id' => User::all()->random(1)->first()->id,
                'achievement_id' => Achievement::all()->random(1)->first()->id
            ]);
        }

        Achievement::factory()->count(18)->create();
    }
}
