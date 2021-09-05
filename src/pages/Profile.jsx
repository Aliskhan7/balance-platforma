import React, { useEffect } from 'react'
import ProfileComp from '../components/ProfileComp'
import Exit from '../components/Exit'
import ShortContacts from '../components/ShortContacts'
import '../static/css/ProfileStyle.css'
import ProgressComponent from '../components/ProgressComponent'
import AchievementComponent from '../components/AchievementComponent'
import { useDispatch } from 'react-redux'
import { startProfile } from '../redux/actions'


function Profile (props) {
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(startProfile())
  },[])

  return (
    <div className='container_profile'>
      <div className="user_component-item">
        <div className="user_component">
          <ProfileComp/>
          <Exit/>
        </div>
        <ShortContacts/>
      </div>
      <ProgressComponent/>
      <AchievementComponent/>
    </div>
  )
}

export default Profile