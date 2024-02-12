import { Link } from "react-router-dom";
import { useState } from "react";

function Task35() {
  const [flag, setFlag] = useState(true);

  return (
    <>
      <h1>Задача №35</h1>
      <p>Текст кнопки открыто меняется на закрыто по нажатию на себя</p>

      <button onClick={() => setFlag(!flag)}>{flag ? "Открыто" : 'Закрыто'}</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task35;
