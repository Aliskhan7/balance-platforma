<?php

namespace Database\Factories;

use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Task::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'header' => $this->faker->word(),
            'description' => $this->faker->text(18),
            'price' => $this->faker->numberBetween(10, 35),
            'type' => $this->faker->randomElement(array_keys(Task::$types)),
            'status' => $this->faker->randomElement(array_keys(Task::$statuses)),
        ];
    }
}
