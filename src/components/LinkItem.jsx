import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

function LinkItem (props) {
  const id = parseInt(useParams().id);

  return (
      <li className={id ? 'active' : ''}>
        <NavLink className='sideBar__list-item' activeClassName='active' to={props.items.path}>
          <span>{props.items.icon}</span>
          {props.items.name}
        </NavLink>
      </li>
  )
}

export default LinkItem