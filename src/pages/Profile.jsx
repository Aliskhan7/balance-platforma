import React from 'react'
import ProfileComp from '../components/ProfileComp'
import Exit from '../components/Exit'
import ShortContacts from '../components/ShortContacts'
import '../static/css/ProfileStyle.css'
import ProgressComponent from '../components/ProgressComponent'
import AchievementComponent from '../components/AchievementComponent'


function Profile (props) {
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