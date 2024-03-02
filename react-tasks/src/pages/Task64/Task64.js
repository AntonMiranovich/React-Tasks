import { Link } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

function Task64() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Задача №64</h1>
      <p>
        Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на
        кнопку счетчик должен увеличиваться на 1. Используйте useCallback, чтобы
        оптимизировать обработчик клика на кнопке
      </p>

      <button
        onClick={useCallback(() => {
          setCount(count + 1);
        }, [count])}
      >
        click
      </button>
      <h1>{count}</h1>
      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task64;
