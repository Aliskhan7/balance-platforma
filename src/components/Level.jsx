import React from 'react'
import LevelStyle from '../static/css/LevelStyle.css';


import { Line } from 'rc-progress';
import nextLevel from '../static/images/nextLevel.svg'



function Level(props) {
    return (
        <div className='level_block'>
            <div className="currentLevel"><span className='levelNumber'>12</span> <span className='levelTitle'>уровень</span></div>
            <Line percent="20" strokeWidth="3" strokeColor="#27AE60" />
            <div className="pos">
                <img className='nextLevelIcon' src={nextLevel} alt="" />
                <div className="nextLevelNumber">13</div>
            </div>
            <div className="nextLevelInfo">до следующего уровня 64 балла</div>
        </div>
    )
}

export default Level