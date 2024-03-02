import { Link } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

function Task65() {
  const [arr, setArr] = useState(["anton", "asdasdass", "asdwqeqsd"]);
  const res = useCallback(
    (e) => setArr(arr.filter((el) => el != e.target.id)),
    [arr]
  );

  return (
    <>
      <h1>Задача №65</h1>
      <p>
        Создайте компонент, который отображает список элементов с кнопками
        "Удалить". При нажатии на кнопку элемент должен быть удален из списка.
        Используйте useCallback, чтобы оптимизировать функцию удаления элемента.
      </p>
      <ul>
        {arr.map((el) => (
          <div style={{ display: "flex" }}>
            <li>{el}</li>
            <button id={el} onClick={res}>
              delete
            </button>
          </div>
        ))}
      </ul>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task65;
