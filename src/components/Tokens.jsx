import React from 'react'
import TokensStyle from '../static/css/TokensStyle.css';



function ScoresAndTokens(props) {
    return (
        <div className='main'>
            <p className='totalTokensNumber'><span className='tokensCount'>1568</span> <span className='tokensTitle'>токенов</span></p>
            <p className='totalTokensInfo'>общий баланс</p>
            <a href='#' className='shop'>В магазин -></a>
        </div>
    )
}

export default ScoresAndTokens