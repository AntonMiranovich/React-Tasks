import { Link } from "react-router-dom";

function Task17() {
  const arrEl = ["anton", "asdqwe", "qwadqweq", 4, 7];
  const color = ["red", "black", "blue"];

  const res = arrEl.map((el) => {
    const colorRandom =color[Math.floor(Math.random() * 3)];
    return (
        <p style={{background: colorRandom}}>
          эллемент {el} с цветом {colorRandom}
        </p>
    );
  });

  return (
    <>
      <h1>Задача №17</h1>
      <p>
        Создайте компонент, который принимает статичный массив элементов и
        присваивает каждому элементу случайный цвет фона. Выведите элементы с их
        цветами на странице.
      </p>

      <div>{res}</div>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task17;
