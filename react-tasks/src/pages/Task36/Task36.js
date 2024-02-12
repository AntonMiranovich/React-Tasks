import { Link } from "react-router-dom";
import { useState } from "react";

function Task36() {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <h1>Задача №36</h1>
      <p>
        Сделай компонент выезжающего меню из 3 параграфов. по нажатию на кнопку
        ,,открыть,, отображаешь меню.
      </p>

      <button onClick={() => setFlag(!flag)}>Click me</button>
      {flag ? (
        <div>
          <p>Paragraf 1</p>
          <p>Paragraf 2</p>
          <p>Paragraf 3</p>
        </div>
      ) : null}

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task36;
