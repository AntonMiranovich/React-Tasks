import { Link } from "react-router-dom";
import { useState } from "react";

function Task26() {
  const [flage, setFlage] = useState(false);

  function changeFlage() {
    setFlage(flage ? false : true);
  }

  return (
    <>
      <h1>Задача №26</h1>
      <p>
        Создайте компонент с кнопкой "Показать/Скрыть текст". При нажатии на
        кнопку текст должен появляться или исчезать
      </p>

      <button onClick={changeFlage}>Показать/Скрыть текст</button>
      <h1>{flage ? "Исчезающий текст" : null}</h1>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task26;
