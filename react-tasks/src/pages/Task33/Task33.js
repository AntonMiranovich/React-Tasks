import { Link } from "react-router-dom";
import { useState } from "react";

function Task33() {
  const [hello, setHello] = useState("");

  return (
    <>
      <h1>Задача №33</h1>
      <p>
        есть кнопка с названием ,,поздороваться,,. по клику на кнопку твоя
        задача отобразить в h1 ,,привет,,. при повторном клике на кнопку
        ,,поздороваться,, убирать ,,привет,, из h1
      </p>

      <button
        onClick={() => (hello.length == 0 ? setHello("Привет") : setHello(""))}
      >
        поздороваться
      </button>
      <h1>{hello}</h1>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task33;
