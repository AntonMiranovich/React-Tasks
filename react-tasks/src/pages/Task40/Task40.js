import { Link } from "react-router-dom";
import { useState } from "react";

function Task40() {
  return (
    <>
      <h1>Задача №40</h1>
      <p>
        Напишите компонент, который будет показывать случайную строку в h1 по
        нажатии на кнопку. Слова хранятся в массиве
      </p>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task40;
