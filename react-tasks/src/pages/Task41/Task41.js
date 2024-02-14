import { Link } from "react-router-dom";
import { useState } from "react";

function Task41() {
  return (
    <>
      <h1>Задача №41</h1>
      <p>
        у вас есть 3 кнопки: о нас, цена, главная страница h1 содержит текст
        активной(нажатой) кнопки (если нажали на ,,цена,, отображать слово
        ,,цена,, в h1)
      </p>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task41;
