import { Link } from "react-router-dom";
import { useState } from "react";

function Task28() {
  const [num, setNum] = useState(0);

  function numPlus() {
    setNum(num + 1);
  }

  function numMinus() {
    setNum(num - 1);
  }

  return (
    <>
      <h1>Задача №28</h1>
      <p>
        Дополните предыдущую задачу. Создайте компонент с 2 кнопками и
        параграфом для отображения результата счетчика (изначально счетчик равен
        0). Ваша задача так реализовать функционал, чтобы при клике на кнопку +1
        автоматически прибавлялась +1 к стейту счетчика, а при клике на кнопку
        -1, происходило вычитание значения 1
      </p>

      <h1>{num}</h1>
      <button onClick={numPlus}>+1</button>
      <button onClick={numMinus}>-1</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task28;
