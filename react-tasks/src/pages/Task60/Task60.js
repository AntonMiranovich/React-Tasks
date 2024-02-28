import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Task60() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, [time]);

  return (
    <>
      <h1>Задача №60</h1>
      <p>
        Таймер с использованием useState и useEffect: Создайте компонент,
        который отображает текущее время и обновляет его каждую секунду
      </p>

      <h1>
        {+time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()}:
        {+time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}:
        {+time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds()}
      </h1>
      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task60;
