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
  return oldState == "ON" ? "OFF" : "ON";
}

function Task74() {
  const [data, dispatch] = useReducer(reducer, "ON");
  return (
    <>
      <h1>Задача №74</h1>
      <p>
        Создайте компонент с текстом и кнопкой. Текст включает 2 состояния «on»
        и «off». По клику на кнопку текст меняется на противоположный
      </p>

      <button onClick={() => dispatch()}>{data}</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task74;
