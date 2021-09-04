import React from 'react'
import ShortContactsStyle from '../static/css/ShortContactsStyle.css';

function ShortContacts(props) {
  return (
    <div className='shortContacts'>
      <p className='contactTitle'>Контактная информация</p>
      <p className='phoneNumber'>+7 928 895-67-53</p>
      <a href='#' className='email'>nikita.konovalov1991@gmail.com</a>
    </div>
  )
}

export default ShortContacts