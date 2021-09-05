import React from 'react'
import RatingTable from '../components/RatingTable'
import TeamsItem from '../components/TeamsItem'

function Teams (props) {
  return (
    <div className='teamsPad'>
      <h2>Команды</h2>
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
      <div className="teamComponents">
        <TeamsItem/>
        <TeamsItem/>
        <TeamsItem/>
      </div>
    </div>
  )
}

export default Teams