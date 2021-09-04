import React from 'react'
import LevelStyle from '../static/css/LevelStyle.css';

import emptyLine from '../static/images/emptyLine.svg';
import fillLine from '../static/images/fillLine.svg';
import nextLevel from '../static/images/nextLevel.svg';


function Level(props) {
    return (
        <div className='level_block'>
            <div className="currentLevel"><span className='levelNumber'>12</span> <span className='levelTitle'>уровень</span></div>
            <div className="progressBar">
                <img className='emptyLine' src={emptyLine} alt="" />
                <img className='fillLineLine' src={fillLine} alt="" />
                <img className='nextLevel' src={nextLevel} alt="" />
            </div>
            <div className="nextLevelInfo">до следующего уровня 64 балла</div>
        </div>
    )
}

export default Level