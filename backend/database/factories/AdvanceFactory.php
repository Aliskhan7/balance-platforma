<?php

namespace Database\Factories;

use App\Models\Advance;
use App\Models\UserLevel;
use Illuminate\Database\Eloquent\Factories\Factory;

class AdvanceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Advance::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'tokens_count' => $this->faker->numberBetween(346, 1810),
            'overall_score' => $this->faker->numberBetween(0, 3453),
            'today_score' => $this->faker->numberBetween(10, 180),
            'level_id' => UserLevel::factory()->create()->id,
        ];
    }
}
