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

function reducer(oldState, action) {
  switch (action) {
    case "plus":
      return oldState + 1;
    case "minus":
      return oldState - 1;
    case "reset":
      return 0;
    default:
      break;
  }
}
function Task73() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>Задача №73</h1>
      <p>
        Создайте компонент счетчика, который может увеличивать, уменьшать,
        сбрасывать значение при нажатии на соответствующие кнопки.
      </p>

      <h1>{count}</h1>

      <button onClick={() => dispatch("plus")}>+1</button>
      <button onClick={() => dispatch("minus")}>-1</button>
      <button onClick={() => dispatch("reset")}>reset</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task73;
