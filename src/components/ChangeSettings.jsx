import React from 'react'
import logout from '../static/images/logout.svg'
import change_settings from '../static/images/change_settings.svg'
import ChangeSettingsStyle from '../static/css/ChangeSettingsStyle.css'

function ChangeSettings(props) {
  return (
    <div className='main'>
      <a href="#"><img className='logoutIcon' src={change_settings} alt="change" srcset="" /></a>    
      <a href='#' className='logoutBtn'>Редактировать</a>
    </div>
  )
}

export default ChangeSettings