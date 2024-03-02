import { Link } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

function Task67() {
  const [color, setColor] = useState("black");
  const colorClick = useCallback(
    (e) => {
      setColor(e.target.textContent);
    },
    [color]
  );
  return (
    <>
      <h1>Задача №67</h1>
      <p>
        Создайте компонент, который предоставляет пользователю выбор цвета из
        списка. При выборе цвета, компонент должен отображать выбранный цвет на
        странице. Используйте useCallback, чтобы оптимизировать функцию выбора
        цвета.
      </p>

      <ul onClick={colorClick}>
        <li style={{ color: color }}>red</li>
        <li style={{ color: color }}>black</li>
        <li style={{ color: color }}>blue</li>
        <li style={{ color: color }}>green</li>
      </ul>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task67;
