import React, { useEffect } from 'react'
import profile_icon from '../static/images/profile_icon.svg'
import '../static/css/ProfileCompStyle.css'
import { useDispatch, useSelector } from 'react-redux'
import { startProfile } from '../redux/actions'

function ProfileComp(props) {
  const items = useSelector( (state) => state.auth.user);

  return (

    <div className='avatar_user'>
      <div className='logo'>
        <img className='img' src={profile_icon} alt="icon" />
      </div>
      <div className='shortInfo'>
        <div className='name'>
          {items.full_name}
        </div>
        <div className='id'>ID: {items.id}</div>
      </div>
    </div>
  )
}

export default ProfileComp