import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Task61() {
  return (
    <>
      <h1>Задача №61</h1>
      <p>
        Факты с использованием useState и useEffect: http://numbersapi.com/:id.
        Создайте компонент React, который при первичном рендеринге отправляет
        запрос к APIс рандомно сгенерированным числом и отображает результат в
        консоль.
      </p>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task61;
