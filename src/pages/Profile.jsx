import React from 'react'
import ProfileComp from '../components/ProfileComp'
import Exit from '../components/Exit'
import ShortContacts from '../components/ShortContacts'
import '../static/css/ProfileStyle.css'


function Profile (props) {
  return (
    <div className='container_profile'>
      <div className="user_component">
        <ProfileComp/>
        <Exit/>
      </div>
      <ShortContacts/>
    </div>
  )
}

export default Profile