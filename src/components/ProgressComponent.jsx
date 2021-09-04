import React from 'react'
import Level from './Level'
import Scores from './Scores'
import '../static/css/progressComponent.css'

function ProgressComponent (props) {
  return (
    <div className='progressBlock'>
      <h2 className='progressBlockText'>Мой прогресс</h2>
      <div className="progressBlockItems">
        <Level/>
        <Scores/>
      </div>
    </div>
  )
}

export default ProgressComponent