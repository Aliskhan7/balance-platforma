import React from 'react'
import logout from '../static/images/logout.svg'
import ExitStyle from '../static/css/ExitStyle.css'

function Exit(props) {
  return (
    <div className='main'>
      <a href="#"><img className='logoutIcon' src={logout} alt="logout" srcset="" /></a>    
      <a href='#' className='logoutBtn'>Выйти</a>
    </div>
  )
}

export default Exit