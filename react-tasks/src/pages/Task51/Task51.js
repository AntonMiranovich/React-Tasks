import { Link } from "react-router-dom";
import { useState } from "react";

function Task51() {
  const [colorText, setColorText] = useState("black");

  return (
    <>
      <h1>Задача №51</h1>
      <p>
        Изменение цвета с использованием useState: Создайте компонент выбора
        цвета, который позволяет пользователю выбирать цвет из списка и
        отображает цвет выбранного цвета на экране.
      </p>

      <h1 style={{ color: colorText }}>Hello</h1>

      <ul onClick={(e) => setColorText(e.target.textContent)}>
        <li >red</li>
        <li>blue</li>
        <li>green</li>
        <li>gray</li>
      </ul>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task51;
