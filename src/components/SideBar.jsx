import React from 'react'
import logo from '../img/logo.png'
import '../static/css/sideBar.css'
import icons from '../img/icons'
import LinkItem from './LinkItem'
import { NavLink } from 'react-router-dom'

function SideBar (outline) {

  const menuList = [
    { icon: icons.user_circle,
      name: 'Профиль',
      path: '/user_prof'},
    { icon: icons.trophy,
      name: 'Рейтинг',
      path: '/rating'},
    { icon: icons.cart,
      name: 'Магазин',
      path: '/store'},
    { icon: icons.users,
      name: 'Задания',
      path: '/task'},
    { icon: icons.clipboard,
      name: 'Команды',
      path: '/team'
    },
  ];

  return (
    <div className='sideBar'>
      <NavLink to='/Login'>
        <img src={logo} alt=""/>
      </NavLink>
      <ul className='sideBar__list'>
        {
          menuList.map(items =>{
            return <LinkItem items={items} key={items.id}/>
          })
        }
      </ul>
    </div>
  )
}

export default SideBar