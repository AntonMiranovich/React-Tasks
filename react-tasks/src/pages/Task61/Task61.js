import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Task61() {
  const [data, setData] = useState("");

  async function test() {
    const dataApi = await axios.get(
      `http://numbersapi.com/${Math.floor(Math.random() * 100)}`
    );
  useEffect(() => {
      setData(dataApi);
    }
  }, [dataApi]);

  return (
    <>
      <h1>Задача №61</h1>
      <p>
        Факты с использованием useState и useEffect: http://numbersapi.com/:id.
        Создайте компонент React, который при первичном рендеринге отправляет
        запрос к APIс рандомно сгенерированным числом и отображает результат в
        консоль.
      </p>

      <h1>{data}</h1>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task61;
