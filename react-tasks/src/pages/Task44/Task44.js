import { Link } from "react-router-dom";
import { useState } from "react";

function Task44() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Задача №44</h1>
      <p>
        Создайте три кнопки с названиями: "+1", "-1", "Сброс". При нажатии на
        кнопку "+1" значение счётчика увеличивается на 1, при нажатии на кнопку
        "-1" значение счётчика уменьшается на 1, а при нажатии на кнопку "Сброс"
        значение счётчика обнуляется. Значение счетчика отображать в h1
      </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Сброс</button>
      <h1>{count}</h1>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task44;
