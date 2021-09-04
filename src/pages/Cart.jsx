import React from 'react'
import CartItem from '../components/CartItem'
import '../static/css/cart.css'

function Cart (props) {
  return (
    <div className='cart_block'>
      <div className="cart_block-title">
        <h2>Корзина</h2>
        <p>Ваш баланс: <span>1568 Ŧ</span></p>
      </div>
      <CartItem/>
      <div className="cart_block-bottonText">
        <p>Вещей в корзине: <span>3</span></p>
        <p>Итого: <span>1125 Ŧ</span></p>
      </div>
      <button className='btn-cart'>
        Отправить запрос
      </button>
    </div>
  )
}

export default Cart