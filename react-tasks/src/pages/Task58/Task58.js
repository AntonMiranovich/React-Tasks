import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Task58() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => setCount(+count + 1), 1000);
  }, [count]);

  return (
    <>
      <h1>Задача №58</h1>
      <p>
        Счетчик с использованием useState и useEffect: Создайте компонент
        счетчика, который увеличивает значение счетчика на 1 каждую секунду с
        использованием useEffect.
      </p>

      <h1>{count}</h1>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task58;
