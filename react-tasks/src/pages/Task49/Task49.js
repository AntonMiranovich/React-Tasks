import { Link } from "react-router-dom";
import { useState } from "react";

function Task49() {
  const [valueInp, setValieInp] = useState("");
  return (
    <>
      <h1>Задача №49</h1>
      <p>
        2. Форма с использованием useState: Создайте компонент текстового поля,
        который позволяет пользователю вводить текст и отображает его в реальном
        времени.
      </p>

      <input
        type="text"
        placeholder="Enter value"
        onChange={(e) => setValieInp(e.target.value)}
      />

      <p>{valueInp}</p>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task49;
