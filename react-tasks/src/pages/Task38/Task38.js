import { Link } from "react-router-dom";
import { useState } from "react";

function Task38() {
  const [valInp, setValInp] = useState("");
  return (
    <>
      <h1>Задача №38</h1>
      <p>отображай в h1 каждое введенное значение из input</p>

      <input
        type="text"
        onChange={(e) => {
          setValInp(e.target.value);
        }}
      />

      <h1>{valInp}</h1>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task38;
