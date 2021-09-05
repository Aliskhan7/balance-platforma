import React from 'react'
import AchievementStyle from '../static/css/AchievementStyle.css';
import achivmentIcon from '../static/images/achivmentIcon.png'
import achivmentIcon2 from '../img/ach.png'
import achivmentIcon3 from '../img/G1.png'
import achivmentIcon4 from '../img/g2.png'
import { useSelector } from 'react-redux'

function Achievement(props) {
  const items = useSelector(state => state.profile)

    return(
      <div className='achievementBlock'>
        <div className='achievement'>
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
        <div className='achievement'>
            <div className='achievementImg'>
              <img className='achievementIcon' src={achivmentIcon2} alt="icon"/>
            </div>
            <div className='shortInfo'>
              <div className='achievementName'>Печатная машина</div>
              <div className='achievementDescription'>
                Достигните уровня 120+ слов в минуту
                в мини-игре на скорость печати
              </div>
            </div>
        </div>
        <div className='achievement'>
          <div className='achievementImg'>
            <img className='achievementIcon' src={achivmentIcon3} alt="icon"/>
          </div>
          <div className='shortInfo'>
            <div className='achievementName'>Телефонный маньяк</div>
            <div className='achievementDescription'>
              Совершите 100 звонков за одну рабочую смену
              и прикрепите документы
            </div>
          </div>
        </div>
        <div className='achievement'>
          <div className='achievementImg'>
            <img className='achievementIcon' src={achivmentIcon4} alt="icon"/>
          </div>
          <div className='shortInfo'>
            <div className='achievementName'>Печатная машина</div>
            <div className='achievementDescription'>
              Достигните уровня 120+ слов в минуту
              в мини-игре на скорость печати
            </div>
          </div>
        </div>
      </div>


    )
}

export default Achievement