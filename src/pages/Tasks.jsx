import React from 'react'

import manager_icon from '../static/images/manager_icon.svg'
import tasksStyle from '../static/css/pages/tasksStyle.css'


function Tasks(props) {
  return (
    <div className='taskContainer'>
      <div className="title">Задания на сегодня</div>
      <div className="tasks">

        <div className="taskCard">
          <div className="top">
            <div className="cardTitle">
              <span className='cardTitleNumber'>№1</span>
              <span className='cardTitleImportance'>обязательный</span>
            </div>
            <div className="cardStatus">В работе</div>
          </div>
          <div className="center">
            <div className="cardPrice">30 баллов</div>
            <div className="taskTitle">Подготовить 50 документов в течение первого часа</div>
            <div className="taskDesc">Обработайте более 50 сканов документов в течение первого часа работы и прикрепите готовые файлы</div>
          </div>
        </div>

        <div className="taskCard">
          <div className="top">
            <div className="cardTitle">
              <span className='cardTitleNumber'>№2</span>
              <span className='cardTitleImportance'>обязательный</span>
            </div>
            <div className="cardStatusBlue">В очереди</div>
          </div>
          <div className="center">
            <div className="cardPrice">45 баллов</div>
            <div className="taskTitle">Обработайте 750+ документов за рабочую смену</div>
            <div className="taskDesc">Обработайте более 750 сканов документов в течение всего рабочего дня и прикрепите готовые файлы</div>
          </div>
        </div>

        <div className="taskCard">
          <div className="top">
            <div className="cardTitle">
              <span className='cardTitleNumber'>№3</span>
              <span className='cardTitleImportanceSecondary'>второстепенный</span>
            </div>
            <div className="cardStatusBlue">В очереди</div>
          </div>
          <div className="center">
            <div className="cardPrice">15 баллов</div>
            <div className="taskTitle">Войти в ТОП-5 операторов за день</div>
            <div className="taskDesc">Выполните все задания и войдите в пятерку лучших операторов по итогам рабочего дня</div>
          </div>
        </div>

        <div className="taskCard">
          <div className="top">
            <div className="cardTitle">
              <span className='cardTitleNumber'>№4</span>
              <span className='cardTitleImportance'>обязательный</span>
            </div>
            <div className="cardStatus">В работе</div>
          </div>
          <div className="center">
            <div className="cardPrice">Бесценно</div>
            <div className="taskTitle">Поговорить с Наташей, которая тебе уже давно нравится</div>
            <div className="taskDesc">Нет смысла тянуть, ты сам по себе ровный пацан, возьми и поговори с ней, нормально всё будет</div>
          </div>
        </div>
        <div className="taskCard">
          <div className="top">
            <div className="cardTitle">
              <span className='cardTitleNumber'>№5</span>
              <span className='cardTitleImportanceSecondary'>второстепенный</span>
            </div>
            <div className="cardStatus">В работе</div>
          </div>
          <div className="center">
            <div className="cardPrice">15 баллов</div>
            <div className="taskTitle">Войти в ТОП-5 операторов за день</div>
            <div className="taskDesc">Выполните все задания и войдите в пятерку лучших операторов по итогам рабочего дня</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Tasks