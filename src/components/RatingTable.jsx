import React from 'react'

function RatingTable (props) {
  return (
    <div className='rating_block'>
      <table className='ratingTable'>
        <tr>
          <th>№</th>
          <th>Оператор</th>
          <th>Баллы</th>
          <th>Заданий</th>
          <th>Достижений</th>
          <th>Токенов</th>
          <th>Уровень</th>
          <th>Команда</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Виталий Наливкин</td>
          <td>4345</td>
          <td>128</td>
          <td>23</td>
          <td>739</td>
          <td>125</td>
          <td>Команда 1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Хабиб Нурмагомедов</td>
          <td>4124</td>
          <td>115</td>
          <td>19</td>
          <td>702</td>
          <td>118</td>
          <td>Команда 1</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Сергей Дружко</td>
          <td>3986</td>
          <td>108</td>
          <td>17</td>
          <td>645</td>
          <td>113</td>
          <td>Команда 1</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Мария Шарапова</td>
          <td>3615</td>
          <td>97</td>
          <td>14</td>
          <td>633</td>
          <td>106</td>
          <td>Команда 1</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Григорий Лепс</td>
          <td>3409</td>
          <td>91</td>
          <td>12</td>
          <td>628</td>
          <td>95</td>
          <td>Команда 1</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Александр Овечкин</td>
          <td>3358</td>
          <td>86</td>
          <td>9</td>
          <td>609</td>
          <td>93</td>
          <td>Команда 1</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Никита Михалков</td>
          <td>3230</td>
          <td>83</td>
          <td>9</td>
          <td>574</td>
          <td>84</td>
          <td>Команда 1</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Александр Кокорин</td>
          <td>3143</td>
          <td>79</td>
          <td>7</td>
          <td>553</td>
          <td>86</td>
          <td>Команда 1</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Константин Соловьев</td>
          <td>3071</td>
          <td>72</td>
          <td>6</td>
          <td>518</td>
          <td>72</td>
          <td>Команда 1</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Игорь Яковлев</td>
          <td>2850</td>
          <td>62</td>
          <td>4</td>
          <td>469</td>
          <td>69</td>
          <td>Команда 1</td>
        </tr>
      </table>
    </div>
  )
}

export default RatingTable