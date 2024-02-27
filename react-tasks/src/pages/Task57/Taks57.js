import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Task57() {
  const [inpVal, setInpVal] = useState("");

  useEffect(() => {
    console.log(inpVal);
  }, [inpVal]);
  
  return (
    <>
      <h1>Задача №57</h1>
      <p>
        Форма ввода с использованием useState и useEffect: Создайте компонент
        React, который содержит форму с полем ввода. Используйте хук useState
        для хранения значения введенного текста и хук useEffect для отслеживания
        изменений этого значения. При каждом изменении значения в поле ввода,
        выводить его в консоль с помощью useEffect.
      </p>

      <input type="text" onChange={(e) => setInpVal(e.target.value)} />

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task57;
