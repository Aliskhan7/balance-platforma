import React from 'react'
import logout from '../static/images/logout.svg'
import ChangeSettingsStyle from '../static/css/ChangeSettingsStyle.css'

function ChangeSettings(props) {
  return (
    <div className='main'>
      <a href="#"><img className='logoutIcon' src={logout} alt="logout" srcset="" /></a>    
      <a href='#' className='logoutBtn'>Редактировать</a>
    </div>
  )
}

export default ChangeSettings