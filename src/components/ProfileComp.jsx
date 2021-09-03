import React from 'react'
import profile_icon from '../static/images/profile_icon.svg'
import ProfileCompStyle from '../static/css/ProfileCompStyle.css';

function ProfileComp(props) {
  return (
    <div>
      <div className='logo'>
        <img className='img' src={profile_icon} alt="icon" />
      </div>
      <div className='shortInfo'>
        <div className='name'>Алексей Коновалов</div>
        <div className='id'>ID: 423289</div>
      </div>
    </div>
  )
}

export default ProfileComp