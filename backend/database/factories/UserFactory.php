<?php

namespace Database\Factories;

use App\Models\Advance;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'full_name' => $this->faker->name(),
            'phone_number' => $this->faker->phoneNumber(),
            'email' => $this->faker->email(),
            'password' => Hash::make('password'),
            'avatar' => $this->faker->imageUrl(32, 32),
            'advance_id' => Advance::factory()->create()->id,
        ];
    }
}
