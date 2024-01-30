import { Link } from "react-router-dom";

function Task16() {
  const arrNum = [1, 2, 3, 4, 5, 6, 7];
  const res = arrNum.map((el) =>
    el % 2 === 0 ? <p>{el} четная</p> : <p>{el} не четная</p>
  );

  return (
    <>
      <h1>Задача №16</h1>
      <p>
        Создайте компонент, который принимает статичный массив чисел и выводит
        информацию о том, является ли каждое число четным или нечетным.
      </p>

      <p>старый массив чисел {arrNum}</p>
      <div>{res}</div>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task16;
