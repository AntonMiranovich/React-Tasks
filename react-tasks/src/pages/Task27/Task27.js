import { Link } from "react-router-dom";
import { useState } from "react";

function Task27() {
  const [num, setNum] = useState(0);

  function numPlus() {
    setNum(num + 1);
  }

  return (
    <>
      <h1>Задача №27</h1>
      <p>
        Создайте компонент с кнопкой и параграфом для отображения результата
        счетчика (изначально счетчик равен 0). Ваша задача так реализовать
        функционал, чтобы при клике на кнопку автоматически прибавлялась +1 к
        стейту счетчика
      </p>

      <h1>{num}</h1>
      <button onClick={numPlus}>+1</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task27;
