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
              <span className='cardTitleImportance'>основной</span>
            </div>
            <div className="cardStatus">В работе</div>
          </div>
          <div className="center">
            <div className="cardPrice">30 баллов</div>
            <div className="manager">
              <img src={manager_icon} alt="" className='managerIcon' />
              <div className="managerInfo">
                <div className="managerName">Андрей Трофимов</div>
                <div className="managerManager">менеджер</div>
              </div>
            </div>
            <div className="taskTitle">Подготовить 50 документов в течение первого часа</div>
            <div className="taskDesc">Обработайте более 50 сканов документов в течение первого часа работы и прикрепите готовые файлы</div>
          </div>
        </div>
        <div className="taskCard">
          <div className="top">
            <div className="cardTitle">
              <span className='cardTitleNumber'>№1</span>
              <span className='cardTitleImportance'>основной</span>
            </div>
            <div className="cardStatus">В работе</div>
          </div>
          <div className="center">
            <div className="cardPrice">30 баллов</div>
            <div className="manager">
              <img src={manager_icon} alt="" className='managerIcon' />
              <div className="managerInfo">
                <div className="managerName">Андрей Трофимов</div>
                <div className="managerManager">менеджер</div>
              </div>
            </div>
            <div className="taskTitle">Подготовить 50 документов в течение первого часа</div>
            <div className="taskDesc">Обработайте более 50 сканов документов в течение первого часа работы и прикрепите готовые файлы</div>
          </div>
        </div>
        <div className="taskCard">
          <div className="top">
            <div className="cardTitle">
              <span className='cardTitleNumber'>№1</span>
              <span className='cardTitleImportance'>основной</span>
            </div>
            <div className="cardStatus">В работе</div>
          </div>
          <div className="center">
            <div className="cardPrice">30 баллов</div>
            <div className="manager">
              <img src={manager_icon} alt="" className='managerIcon' />
              <div className="managerInfo">
                <div className="managerName">Андрей Трофимов</div>
                <div className="managerManager">менеджер</div>
              </div>
            </div>
            <div className="taskTitle">Подготовить 50 документов в течение первого часа</div>
            <div className="taskDesc">Обработайте более 50 сканов документов в течение первого часа работы и прикрепите готовые файлы</div>
          </div>
        </div>
        <div className="taskCard">
          <div className="top">
            <div className="cardTitle">
              <span className='cardTitleNumber'>№1</span>
              <span className='cardTitleImportance'>основной</span>
            </div>
            <div className="cardStatus">В работе</div>
          </div>
          <div className="center">
            <div className="cardPrice">30 баллов</div>
            <div className="manager">
              <img src={manager_icon} alt="" className='managerIcon' />
              <div className="managerInfo">
                <div className="managerName">Андрей Трофимов</div>
                <div className="managerManager">менеджер</div>
              </div>
            </div>
            <div className="taskTitle">Подготовить 50 документов в течение первого часа</div>
            <div className="taskDesc">Обработайте более 50 сканов документов в течение первого часа работы и прикрепите готовые файлы</div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Tasks