import React from 'react'
import '../static/css/teams.css'
import levelImg from '../img/level.png'
import avatarTeam from '../img/avatar.png'
import icon1 from '../img/icon1.png'
import icon2 from '../img/icon2.png'
import icon3 from '../img/icon3.png'
import icon4 from '../img/icon4.png'

function TeamsItem (props) {
  return (
    <div className='teams'>
      <div className='teamsItem'>
        <div className="teamsItemTop">
          <h3>Expovision</h3>
          <img src={levelImg} alt=""/>
        </div>
        <div className="teamsItemUser">
          <img src={avatarTeam} alt=""/>
          <div className="teamsItemUserText">
            <h3>Андрей Трофимов </h3>
            <span>менеджер</span>
          </div>
        </div>
        <div className="teamsItemInfo">
          <div className="teamsItemInfoImg">
            <img src={icon1} alt=""/>
            <img src={icon2} alt=""/>
            <img src={icon3} alt=""/>
            <img src={icon4} alt=""/>
         <span>+4</span>
          </div>
          <p>Подробнее</p>
        </div>
      </div>
    </div>

  )
}

export default TeamsItem