import { Link } from "react-router-dom";
import { useState } from "react";

function Task21() {
  const [param, setParam] = useState("");

  function linkParam(e) {
    setParam(e.target.value);
  }

  return (
    <>
      <h1>Задача №21</h1>
      <p>
        1. При вводе данных в input отображать вводимое значение в параграф
        текущей страницы
      </p>

      <p>{param}</p>

      <input type="text" onChange={linkParam} />

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task21;
