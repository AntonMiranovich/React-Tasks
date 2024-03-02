import { Link } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

function Task66() {
  const [status, setStatus] = useState("Неактивный");

  const changesInStatus = useCallback(() => {
    setStatus(status == "Неактивный" ? "Активный" : "Неактивный");
  }, [status]);

  return (
    <>
      <h1>Задача №66</h1>
      <p>
        Создайте компонент, который имеет кнопку "Изменить статус". При каждом
        клике на кнопку статус компонента должен меняться между "Активный" и
        "Неактивный". Используйте useCallback, чтобы оптимизировать функцию
        изменения статуса.
      </p>

      <h1>{status}</h1>
      <button onClick={changesInStatus}>Изменить статус</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task66;
