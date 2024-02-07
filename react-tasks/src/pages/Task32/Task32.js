import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

function Task32() {
  const [inpVal, setInpVal] = useState("");

  const checkVal = (e) => setInpVal(e.target.value);

  useEffect(() => console.log(inpVal), [inpVal]);

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

      <div>
        <TextField label="Input Value" variant="filled" onChange={checkVal} />
      </div>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task32;
