import React, { useEffect } from 'react'
import Achievement from './Achievement'
import { useDispatch } from 'react-redux'
import { startProfile } from '../redux/actions'

function AchievementComponent (props) {
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(startProfile())
  },[])
  return (
    <div className='achievement_block'>
      <h2>Мои достижения</h2>
      <Achievement/>
    </div>
  )
}

export default AchievementComponent