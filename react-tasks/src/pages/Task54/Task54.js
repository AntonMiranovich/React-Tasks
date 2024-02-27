import { Link } from "react-router-dom";
import { useState } from "react";

function Task54() {
  const [size, setSize] = useState("20");
  
  return (
    <>
      <h1>Задача №54</h1>
      <p>
        Изменение размера шрифта с использованием useState: Создайте компонент,
        который предоставляет две кнопки: "Увеличить" и "Уменьшить". При нажатии
        на эти кнопки значение font-size изменяется соответствующим образом на
        +/– 1px
      </p>

      <h1 style={{ fontSize: size }}>Random text</h1>
      <button onClick={() => setSize(+size + 1)}>Увеличить</button>
      <button onClick={() => setSize(+size - 1)}>Уменьшить</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task54;
