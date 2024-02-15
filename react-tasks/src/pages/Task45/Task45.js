import { Link } from "react-router-dom";
import { useState } from "react";

function Task45() {
  const [name, setName] = useState("");
  return (
    <>
      <h1>Задача №45</h1>
      <p>
        Создайте форму ввода, в которой пользователь может вводить своё имя и
        отображать его под формой.
      </p>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h1>{name}</h1>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task45;
