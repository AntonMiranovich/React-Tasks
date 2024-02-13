import { Link } from "react-router-dom";
import { useState } from "react";

function Task39() {
  const [inpValues] = useState([]);

  return (
    <>
      <h1>Задача №39</h1>
      <p>
        получить значение из 2 инпутов и отобразить это в консоль по клику на
        кнопку (одним useState)
      </p>
      <input onChange={(e) => (inpValues[0] = e.target.value)} />
      <input onChange={(e) => (inpValues[1] = e.target.value)} />
      <button onClick={() => console.log(inpValues[0], inpValues[1])}>Click me</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task39;
