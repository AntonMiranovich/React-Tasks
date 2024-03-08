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



function reducer(_oldState, action) {
  switch (action.type) {
    case "val":
      return action.value;

    default:
      break;
  }
}

function Task77() {
  const [inpVal1, dispatch1] = useReducer(reducer, 0);
  const [inpVal2, dispatch2] = useReducer(reducer, 0);

  return (
    <>
      <h1>Задача №77</h1>
      <p>
        Создайте компонент отслеживающий вводимое значение 2 input. Посчитать
        сумму 2 input. По клику на кнопку отображать результат в консоль
      </p>

      <input
        type="text"
        onChange={(e) => dispatch1({ type: "val", value: e.target.value })}
      />
      <input
        type="text"
        onChange={(e) => dispatch2({ type: "val", value: e.target.value })}
      />

      <button onClick={() => console.log(+inpVal1 + +inpVal2)}>Click</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task77;
