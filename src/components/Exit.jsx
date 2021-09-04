import React from 'react'
import logout from '../static/images/logout.svg'
import ExitStyle from '../static/css/ExitStyle.css'
import ChangeSettings from './ChangeSettings'

function Exit(props) {
  return (
    <div className='exit_block'>
      <div className='exit_links'>
        <a href="#"><img className='logoutIcon' src={logout} alt="logout" srcSet=""/></a>
        <a href='#' className='logoutBtn'>Выйти</a>
      </div>
      <ChangeSettings/>
    </div>

  )
}

export default Exit