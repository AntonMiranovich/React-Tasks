import { Link } from "react-router-dom";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import axios from "axios";
import { TaskContext } from "../../Context/Context";

function reducer(oldState, action) {
  switch (action) {
    case "red":
      return action;
    case "blue":
      return action;
    case "purple":
      return action;
    case "pink":
      return action;

    default:
      break;
  }
}

function Task76() {
  const [color, dispatch] = useReducer(reducer, "black");
  const arr = useRef(["red", "blue", "purple", "pink"]);
  return (
    <>
      <h1>Задача №76</h1>
      <p>
        Вам предоставлен массив цветов, таких как red, blue, purple, pink. При
        клике на кнопку ваша задача изменить цвет заголовка на цвет,
        соответствующий нажатой кнопке.
      </p>

      <h1 style={{ color: color }}>Changed color</h1>
      {arr.current.map((el) => (
        <button onClick={(e) => dispatch(e.target.textContent)}>{el}</button>
      ))}

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task76;
