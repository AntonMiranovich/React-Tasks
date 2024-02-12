import { Link } from "react-router-dom";
import { useState } from "react";

function Task37() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Задача №37</h1>
      <p>
        Создай компонент, который будет отслеживать количество кликов по кнопке
        и отображать это количество
      </p>

      <button onClick={() => setCount(count + 1)}>Click on me</button>
      <h1>{count}</h1>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task37;
