import React from 'react'
import storeStyle from '../static/css/pages/storeStyle.css'
import storeItem from '../static/images/storeItem.svg'
import storeItem1 from '../img/a1.png'
import storeItem2 from '../img/a2.png'
import storeItem3 from '../img/a3.png'
import storeItemNau from '../img/nau.png'
import storeItemBand from '../img/band.png'

function Store(props) {
  return (
    <div className='storeBg'>
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
            <img src={storeItemBand} alt="item" className='storeProductIcon' />
            <div className="storeProductInfo">
              <div className="storeProductInfoTitle">Фитнес браслет</div>
              <div className="storeProductInfoDesc">Mi Smart Band 6 – это фитнес трекер Xiaomi нового поколения</div>
              <div className="storeProductInfoPrice">
                <div className="price">330 токенов</div>
                <button className="addCart">В корзину</button>
              </div>
            </div>
          </div>
          <div className="storeProduct">
            <img src={storeItemNau} alt="item" className='storeProductIcon' />
            <div className="storeProductInfo">
              <div className="storeProductInfoTitle">Наушники</div>
              <div className="storeProductInfoDesc">AirPods Pro – лёгкие наушники
                с функцией шумоподавления</div>
              <div className="storeProductInfoPrice">
                <div className="price">330 токенов</div>
                <button className="addCart">В корзину</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="storeShowcase">
        <div className="categoryName">Подписки на разные сервисы</div>
        <div className="carousel">
          <div className="storeProduct">
            <img src={storeItem1} alt="item" className='storeProductIcon' />
            <div className="storeProductInfo">
              <div className="storeProductInfoTitle">Netflix</div>
              <div className="storeProductInfoDesc">Фильмы, сериалы и многое другое без ограничений</div>
              <div className="storeProductInfoPrice">
                <div className="price">330 токенов</div>
                <button className="addCart">В корзину</button>
              </div>
            </div>
          </div>
          <div className="storeProduct">
            <img src={storeItem2} alt="item" className='storeProductIcon' />
            <div className="storeProductInfo">
              <div className="storeProductInfoTitle">Storytel</div>
              <div className="storeProductInfoDesc">160 000 аудиокниг, лекций, подкастов, сериалов</div>
              <div className="storeProductInfoPrice">
                <div className="price">330 токенов</div>
                <button className="addCart">В корзину</button>
              </div>
            </div>
          </div>
          <div className="storeProduct">
            <img src={storeItem3} alt="item" className='storeProductIcon' />
            <div className="storeProductInfo">
              <div className="storeProductInfoTitle">Skyeng</div>
              <div className="storeProductInfoDesc">Месяц английского с доступом ко всем упражнениям</div>
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

// asdasdasd