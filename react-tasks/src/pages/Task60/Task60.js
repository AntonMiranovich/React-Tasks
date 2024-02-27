import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Task60() {
  return (
    <>
      <h1>Задача №60</h1>
      <p>
        Таймер с использованием useState и useEffect: Создайте компонент,
        который отображает текущее время и обновляет его каждую секунду
      </p>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task60;
