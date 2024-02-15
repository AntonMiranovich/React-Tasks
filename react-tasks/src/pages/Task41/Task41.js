import { Link } from "react-router-dom";
import { useState } from "react";

function Task41() {
  const [resValBtn, setResValBtn] = useState("нажмите на любую кнопку");

  function checkValBtn(e) {
    setResValBtn(e.target.name);
  }

  return (
    <>
      <h1>Задача №41</h1>
      <p>
        у вас есть 3 кнопки: о нас, цена, главная страница h1 содержит текст
        активной(нажатой) кнопки (если нажали на ,,цена,, отображать слово
        ,,цена,, в h1)
      </p>

      <h1>{resValBtn}</h1>
      <button onClick={checkValBtn} name="О нас">
        О нас
      </button>
      <button onClick={checkValBtn} name="Цена">
        Цена
      </button>
      <button onClick={checkValBtn} name="Главная страница">
        Главная страница
      </button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task41;
