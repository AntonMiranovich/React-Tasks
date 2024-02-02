import { Link } from "react-router-dom";
import { useState } from "react";

function Task29() {
  const [num, setNum] = useState(0);

  function numPlus() {
    setNum(num + 1);
  }

  function numMinus() {
    setNum(num - 1);
  }

  function numClear() {
    setNum(0);
  }

  return (
    <>
      <h1>Задача №29</h1>
      <p>
        Дополните предыдущую задачу. Создайте компонент, который отображает
        счетчик и кнопку "Сброс". При нажатии на кнопку, счетчик должен
        сбрасываться в ноль. Используйте useState, чтобы управлять значением
        счетчика.
      </p>

      <h1>{num}</h1>
      <button onClick={numPlus}>+1</button>
      <button onClick={numMinus}>-1</button>
      <button onClick={numClear}>Clear</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task29;
