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

function reducer(oldState, obj) {
  switch (obj.type) {
    case "addValue":
      return obj.value;

    default:
      break;
  }
}

function Task75() {
  const [inpValue, dispatch] = useReducer(reducer, "");

  return (
    <>
      <h1>Задача №75</h1>
      <p>
        Создайте компонент отслеживающий вводимое значение в input. Результат
        отображать в h1
      </p>

      <input
        type="text"
        onChange={(e) => dispatch({ type: "addValue", value: e.target.value })}
      />
      <h1>{inpValue}</h1>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task75;
