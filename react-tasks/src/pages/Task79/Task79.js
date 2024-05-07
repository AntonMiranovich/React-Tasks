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


function Task79() {
  const [data, setData] = useState('')
  const [res, setRes] = useState('')

  return (
    <>
      <h1>Задача №79</h1>
      <p>
        Создайте компонент с полем ввода имени и кнопкой "Привет". При вводе имени в
        поле и нажатии на кнопку, компонент должен отображать приветственное сообщение с
        именем, введенным пользователем.
      </p>

      <input type="text" placeholder="Введите имя" onChange={(e) => setData(e.target.value)} />
      <button onClick={() => setRes(`Привет ${data}`)}>Поздороватся</button>
      <h1>{res}</h1>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task79;