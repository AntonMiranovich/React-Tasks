import { Link } from "react-router-dom";
import { useState } from "react";

function Task42() {
  return (
    <>
      <h1>Задача №42</h1>
      <p>
        сделайте инпут в который вводится математическое выражение по клику на
        кнопку посчитать результат мат выражения (eval()) и отобразить результат
        в h1
      </p>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task42;
