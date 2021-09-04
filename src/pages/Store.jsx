import React from 'react'
import storeStyle from '../static/css/pages/storeStyle.css'
import storeItem from '../static/images/storeItem.svg'

function Store(props) {
  return (
    <div>
      <div className='showCase'>
        <div className="storeInfo">
          <div className='storeTitle'>Магазин</div>
          <div className='storeDesc'>
            Выполняйте задания и получайте токены, которые вы сможете потратить в магазине
          </div>
          <div className='storeMoney'>Ваш баланс: <span className='currentMoney'>1568</span></div>
        </div>
      </div>
      <div className="storeShowcase">
        <div className="categoryName">Гаджеты</div>
        <div className="carousel">
          <div className="storeProduct">
            <img src={storeItem} alt="item" className='storeProductIcon' />
            <div className="storeProductInfo">
              <div className="storeProductInfoTitle">Xiaomi Powerbank</div>
              <div className="storeProductInfoDesc">Внешний аккумулятор от Xiaomi на 10000 Mah</div>
              <div className="storeProductInfoPrice">
                <div className="price">330 токенов</div>
                <button className="addCart">В корзину</button>
              </div>
            </div>
          </div>
          <div className="storeProduct">
            <img src={storeItem} alt="item" className='storeProductIcon' />
            <div className="storeProductInfo">
              <div className="storeProductInfoTitle">Xiaomi Powerbank</div>
              <div className="storeProductInfoDesc">Внешний аккумулятор от Xiaomi на 10000 Mah</div>
              <div className="storeProductInfoPrice">
                <div className="price">330 токенов</div>
                <button className="addCart">В корзину</button>
              </div>
            </div>
          </div>
          <div className="storeProduct">
            <img src={storeItem} alt="item" className='storeProductIcon' />
            <div className="storeProductInfo">
              <div className="storeProductInfoTitle">Xiaomi Powerbank</div>
              <div className="storeProductInfoDesc">Внешний аккумулятор от Xiaomi на 10000 Mah</div>
              <div className="storeProductInfoPrice">
                <div className="price">330 токенов</div>
                <button className="addCart">В корзину</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store