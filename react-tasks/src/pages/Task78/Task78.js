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


function Task78() {
  const [data, setData] = useState(0)

  return (
    <>
      <h1>Задача №78</h1>
      <p>
        Создайте компонент, который отображает кнопку и счетчик. При каждом нажатии
        на кнопку значение счетчика должно увеличиваться на  1
      </p>

      <h1>{data}</h1>
      <button onClick={() => setData(data + 1)}>+1</button>
      <button onClick={() => setData(data - 1)}>-1</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task78;