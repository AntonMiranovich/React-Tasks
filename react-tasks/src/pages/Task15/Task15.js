import { Link } from "react-router-dom";

function Task15() {
  const color = ["red", "black", "blue"];

  function colorRandom(e) {
    e.target.style = `background-color:${color[Math.floor(Math.random() * 3)]}`;
  }

  return (
    <>
      <h1>Задача №15</h1>
      <p>
        Реализуйте компонент с кнопкой, которая при каждом нажатии меняет свой
        цвет в соответствии с массивом цветов ['red', 'white', 'blue'].
        Используйте рандомный выбор цвета из массива при каждом клике.
      </p>

      <button onClick={colorRandom}>Click</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task15;
