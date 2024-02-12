import { Link } from "react-router-dom";
import { useState } from "react";

function Task34() {
  const [color, setColor] = useState("black");

  return (
    <>
      <h1>Задача №34</h1>
      <p>
        есть кнопка с названием ,,добавить цвет,,. по клику на кнопку твоя
        задача поменять цвет шрифта h1. при повторном клике цвет вернуть в
        первоначальное состояние
      </p>

      <h1 style={{ color: color }}>Text</h1>
      <button
        onClick={() => (color == "black" ? setColor("red") : setColor("black"))}
      >
        Изменить цвет текста
      </button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task34;
