import { Link } from "react-router-dom";
import { useState } from "react";

function Task40() {
  const [arrStr, setArrStr] = useState("");

  const arr = ["Anton", "test", "test2", "test3", "test4", "test5"];

  return (
    <>
      <h1>Задача №40</h1>
      <p>
        Напишите компонент, который будет показывать случайную строку в h1 по
        нажатии на кнопку. Слова хранятся в массиве
      </p>

      <button onClick={() => setArrStr(arr[Math.floor(Math.random() * 6)])}>
        Click
      </button>

      <h1>{arrStr}</h1>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task40;
