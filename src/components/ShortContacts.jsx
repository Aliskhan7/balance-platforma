import React from 'react'
import ShortContactsStyle from '../static/css/ShortContactsStyle.css';
import { useSelector } from 'react-redux'

function ShortContacts(props) {
  const items = useSelector( (state) => state.auth.user);
  return (
    <div className='shortContacts'>
      <p className='contactTitle'>Контактная информация</p>
      <p className='phoneNumber'>{items.phone_number}</p>
      <a href='#' className='email'>{items.email}</a>
    </div>
  )
}

export default ShortContacts