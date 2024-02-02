import { Link } from "react-router-dom";
import { useState } from "react";

function Task30() {
  const [data, setData] = useState({ name: "", surname: "" });

  function inpVal(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function checkInp(){
    console.log(data);
  }

  return (
    <>
      <h1>Задача №30</h1>
      <p>
        По клику на кнопку собрать данные из двух input: name, surname. Работать
        с 1 state, первоначальное значение которого name: ‘’, surname: ‘’.
        Проверить значения 2 input на пустоту. Структура state:
      </p>

      <input name="name" type="text" placeholder="name" onChange={inpVal} />
      <input
        name="surname"
        type="text"
        placeholder="surname"
        onChange={inpVal}
      />
      <button onClick={checkInp}>Click</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task30;
