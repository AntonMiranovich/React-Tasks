import { Link } from "react-router-dom";
import { useState } from "react";

function Task55() {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <h1>Задача №55</h1>
      <p>
        Отображение навигации с использованием useState: По нажатию на кнопку
        “бургер” отображать блок навигации из 4 параграфов.
      </p>

      <button onClick={() => setFlag(!flag)}>бургер</button>
      
      {flag && (
        <div>
          <p>Paragraf 1</p>
          <p>Paragraf 2</p>
          <p>Paragraf 3</p>
          <p>Paragraf 4</p>
        </div>
      )}

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task55;
