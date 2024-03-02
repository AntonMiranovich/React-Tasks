import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

function Task61() {
  const [str, setStr] = useState("");

  function keepStr(e) {
    setStr(e.target.value);
  }

  const res = useMemo(() => {
    return str.split('').reverse().join('');
  });

  return (
    <>
      <h1>Задача №61</h1>
      <p>
        Напишите программу, которая принимает строку от пользователя и выводит
        ее в обратном порядке. Используй хук useState для хранения строки и хук
        useMemo для кэширования результата
      </p>

      <h1>{res}</h1>

      <input type="text" onChange={keepStr} />
      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task61;
