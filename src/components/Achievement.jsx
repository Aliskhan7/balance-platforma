import React from 'react'
import AchievementStyle from '../static/css/AchievementStyle.css';
import achivmentIcon from '../static/images/achivmentIcon.png'
import { useSelector } from 'react-redux'

function Achievement(props) {
  const items = useSelector(state => state.profile)

    return(
        <div className='achievement'>
              <div>
                  <div className='achievementImg'>
                    <img className='achievementIcon' src={achivmentIcon} alt="icon"/>
                  </div>
                  <div className='shortInfo'>
                    <div className='achievementName'>Начало</div>
                    <div className='achievementDescription'>
                      Совершите свой первый звонок в качестве сотрудника
                    </div>
                  </div>
                </div>
        </div>
    )
}

export default Achievement