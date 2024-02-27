import { Link } from "react-router-dom";
import { useState } from "react";

function Task50() {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <h1>Задача №50</h1>
      <p>
        Отображение текста с использованием useState: Создайте компонент,
        который предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на
        "Показать" отображается текст, а при нажатии на "Скрыть" текст
        скрывается
      </p>
      <button onClick={() => setFlag(true)}>Показать</button>
      <button onClick={() => setFlag(false)}>Скрыть</button>

      {flag && <p>Component</p>}

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task50;
