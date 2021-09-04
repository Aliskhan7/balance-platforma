import React from 'react'
import logo from '../img/logo.png'
import '../styles/sideBar.css'
import icons from '../img/icons'
import LinkItem from './LinkItem'

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
      <img src={logo} alt=""/>
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