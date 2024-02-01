import { Link } from "react-router-dom";
import { useState } from "react";

function Task23() {
  const [inp, setInp] = useState("");

  function changeValue(e) {
    setInp(e.target.value);
  }

  function chectEmail() {
    if (/^[A-z0-9]+\@(gmail|mail|yandex)\.(com|ru|by)$/gm.test(inp)) {
      console.log("подходит");
    } else {
      console.log("не подходит");
    }
  }

  return (
    <>
      <h1>Задача №23</h1>
      <p>
        Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать
        данные из input и проверить вводимую строку на почту. Результат
        отображать в консоль
      </p>

      <input type="text" onChange={changeValue} />
      <button onClick={chectEmail}>click</button>
      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task23;
