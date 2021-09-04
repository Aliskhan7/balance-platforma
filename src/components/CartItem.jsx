import React from 'react'

function CartItem (props) {
  return (
    <div className='cart_item'>
      <img src="" alt=""/>
      <div className="cart_text">
        <div className="cart_item-text">
          <h3>Xiaomi Powerbank</h3>
          <p>Внешний аккумулятор от Xiaomi на 10000 Mah</p>
        </div>
        <span>330 токенов</span>
      </div>
      <button className='btn_cart-delete'>
        x
      </button>
    </div>
  )
}

export default CartItem