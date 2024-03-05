import { Link } from "react-router-dom";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { TaskContext } from "../../Context/Context";
import axios from "axios";

function Task70() {
  const { tast70Constext } = useContext(TaskContext);
  const [data, setData] = useState("Привет");

  return (
    <>
      <h1>Задача №70</h1>
      <p>
        Создайте приложение, где пользователь сможет выбирать язык интерфейса
        (например, английский или испанский). Используйте useContext для
        сохранения текущего выбранного языка и перевода текста в выбранный язык
        в компонентах
      </p>

      <h1>{data}</h1>

      <button onClick={(e) => setData(tast70Constext[e.target.textContent])}>
        ru
      </button>
      <button onClick={(e) => setData(tast70Constext[e.target.textContent])}>
        en
      </button>
      <button onClick={(e) => setData(tast70Constext[e.target.textContent])}>
        jp
      </button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task70;
