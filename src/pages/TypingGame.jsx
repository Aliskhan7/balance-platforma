import React from 'react'
import useTypingGame from "react-typing-game-hook";
import '../static/css/typingGame.css'

function TypingGame (props) {
  let text = "Катарсис, по определению, непредвзято контролирует дуализм. " +
    "Надстройка, как принято считать, откровенна. Здравый смысл, по определению, " +
    "заполняет сложный дедуктивный метод. Гештальтпсихология выводит позитивизм. " +
    "Моцзы, Сюнъцзы и другие считали, что исчисление предикатов раскладывает на элементы " +
    "типичный язык образов. Адживика естественно дискредитирует даосизм, однако Зигварт " +
    "считал критерием истинности необходимость и общезначимость, для которых нет никакой опоры в " +
    "объективном мире. Ощущение мира подчеркивает непредвиденный дедуктивный метод, однако Зигварт считал критерием истинности. Гегельянство непредвзято заполняет субъективный даосизм. " +
    "Отсюда естественно следует, что вещь в себе представляет собой ";
  const {
    states: {
      charsState,
      length,
      currIndex,
      startTime,
      endTime
    },
    actions: { insertTyping, resetTyping, deleteTyping }
  } = useTypingGame(text);

  const handleKey = (key) => {
    if (key === "Escape") {
      resetTyping();
    } else if (key === "Backspace") {
      deleteTyping(false);
    } else if (key.length === 1) {
      insertTyping(key);
    }
  };

  return (
    <div className='typing_block'>
      <h2>Скорость печати</h2>
      <p>Поиграйте в мини-игру и определите, насколько
        быстро вы умеете печатать на клавиатурек</p>
      <div
        className="typing-test"
        tabIndex={0}
      >

        {text.split("").map((char,index) => {
          let state = charsState[index];
          let color = state === 0 ? "black" : state === 1 ? "green" : "red";
          return (
            <span
              key={char + index}
              style={{ color }}
              className={currIndex + 1 === index ? "curr-letter" : ""}
            >
              {char}
            </span>
          );
        })}
      </div>
      <button className='btnStart' onKeyDown={(e) => {
        handleKey(e.key);
        e.preventDefault();
      }}>Старт</button>
      <pre>
        {JSON.stringify(
          {
            startTime,
            endTime,
            length,
          },
          null,
          2
        )}
      </pre>
    </div>
  );
}

export default TypingGame