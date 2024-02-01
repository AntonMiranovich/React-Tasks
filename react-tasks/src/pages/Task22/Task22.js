import { Link } from "react-router-dom";
import { useState } from "react";

function Task22() {
  const [inp, setInp] = useState('');

  function linkInp(e) {
    setInp(e.target.value);
  }

  function checkPalidrom() {
    if (inp == inp.split("").reverse().join("")) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  return (
    <>
      <h1>Задача №22</h1>
      <p>
        По клику на кнопку собрать данные из input и проверить вводимую строку
        на палиндром
      </p>

      <input type="text" onChange={linkInp} />
      <button onClick={checkPalidrom}>Click</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task22;
