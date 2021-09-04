import React from 'react'
import AchievementStyle from '../static/css/AchievementStyle.css';
import achivmentIcon from '../static/images/achivmentIcon.png'



function Achievement(props) {
    return (
        <div className='achievement'>
            <div className='achievementImg'>
                <img className='achievementIcon' src={achivmentIcon} alt="icon"></img>
            </div>
            <div className='shortInfo'>
                <div className='achievementName'>Начало</div>
                <div className='achievementDescription'>
                    Совершите свой первый звонок в качестве сотрудника
                </div>
            </div>
        </div>
    )
}

export default Achievement