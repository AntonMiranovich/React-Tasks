import { Link } from "react-router-dom";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { TaskContext } from "../../Context/Context";

function Task80() {
  const [res, setRes] = useState(0)

  return (
    <>
      <h1>Задача №80</h1>
      <p>
        Создайте компонент, который отображает счетчик и кнопку "Сброс". При нажатии
        на кнопку, счетчик должен сбрасываться в ноль. Используйте useState, чтобы управлять
        значением счетчика.
      </p>

      <h1>{res}</h1>
      <button onClick={() => setRes(res + 1)}>+1</button>
      <button onClick={() => setRes(res - 1)}>-1</button>
      <button onClick={() => setRes(0)}>Сброс</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task80;