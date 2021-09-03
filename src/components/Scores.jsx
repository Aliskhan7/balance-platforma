import React from 'react'
import ScoresStyle from '../static/css/ScoresStyle.css';



function ScoresAndTokens(props) {
    return (
        <div className='main'>
            <p className='todayScoresNumber'><span className='scoresCount'>28</span> <span className='scoresTitle'>баллов</span></p>
            <p className='todayScoresInfo'>заработано сегодня</p>
            <a href='#' className='generalRating'>Общий рейтинг</a>
        </div>
    )
}

export default ScoresAndTokens