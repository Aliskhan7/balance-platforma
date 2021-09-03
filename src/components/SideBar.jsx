import React from 'react'
import logo from '../img/logo.png'
import '../styles/sideBar.css'
import icons from '../img/icons'
import LinkItem from './LinkItem'

function SideBar (outline) {

  const menuList = [
    { icon: icons.home,
      name: 'Главная'},
    { icon: icons.user_circle,
      name: 'Профиль'},
    { icon: icons.trophy,
      name: 'Рейтинг'},
    { icon: icons.cart,
      name: 'Магазин'},
    { icon: icons.users,
      name: 'Задания'},
    { icon: icons.clipboard,
      name: 'Команды'},
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