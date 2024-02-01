import { Link } from "react-router-dom";
import { useState } from "react";

function Task24() {
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");

  function checkInpValue1(e) {
    setInp1(e.target.value);
  }

  function checkInpValue2(e) {
    setInp2(e.target.value);
  }

  function comparison() {
    console.log(inp1 == inp2 ? true : false);
  }

  return (
    <>
      <h1>Задача №24</h1>
      <p>
        Создайте компонент с 2 полями ввода и кнопкой. По клику на кнопку
        собрать данные из двух input (2 разных state). Сравнить значения 2 input
        на равенство. Результат отображать в консоль
      </p>

      <input type="text" onChange={checkInpValue1} />
      <input type="text" onChange={checkInpValue2} />
      <button onClick={comparison}>comparison</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task24;
