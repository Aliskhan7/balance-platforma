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
      </table>
    </div>
  )
}

export default RatingTable