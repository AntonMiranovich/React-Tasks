import { Link } from "react-router-dom";
import { useState } from "react";

function Task46() {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <h1>Задача №46</h1>
      <p>
        Реализовать селектор, где по клику на копку отображается 3 параграфа.
        При повторном клике параграфы скрываются.
      </p>
      <button onClick={() => setFlag(!flag)}>Click</button>

      {flag ? (
        <div>
          <p>Padagraf 1</p>
          <p>Padagraf 2</p>
          <p>Padagraf 3</p>
        </div>
      ) : null}

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task46;
