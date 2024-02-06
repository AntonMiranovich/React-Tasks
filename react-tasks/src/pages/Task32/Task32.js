import { Link } from "react-router-dom";
import { useState } from "react";

function Task32() {
  return (
    <>
      <h1>Задача №32</h1>
      <p>
        Форма ввода с использованием useState и useEffect: Создайте компонент
        React, который содержит форму с полем ввода. Используйте хук useState
        для хранения значения введенного текста и хук useEffect для отслеживания
        изменений этого значения. При каждом изменении значения в поле ввода,
        выводить его в консоль с помощью useEffect.
      </p>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task32;
