<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'label' => $this->faker->word(),
            'description' => $this->faker->text(),
            'price' => $this->faker->numberBetween(100, 300),
            'image_path' => $this->faker->imageUrl(128, 128, 'product'),
            'type' => $this->faker->randomElement(array_keys(Product::$types)),
        ];
    }
}
