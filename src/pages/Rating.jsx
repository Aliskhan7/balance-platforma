import React from 'react'
import RatingTable from '../components/RatingTable'
import '../static/css/ratingPage.css'

function Rating (props) {
  return (
    <div className='rating'>
      <h2>Рейтинг ТОП-10</h2>
      <div className="rating_search">
        <input type="search" placeholder='Поиск'/>
        <div className="rating_select">
          <span>Сортировка:</span>
          <select name="" id="" className='ratingSelect'>
            <option value="">За месяц</option>
            <option value="">За неделю</option>
            <option value="">За день</option>
          </select>
        </div>
      </div>
      <RatingTable/>
    </div>
  )
}

export default Rating