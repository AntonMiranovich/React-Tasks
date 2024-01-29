import { Link } from "react-router-dom";

function Task8() {
  const arr = [1, 2, 3, 4, 5];

  const minNum = Math.min(...arr);
  const maxNum = Math.max(...arr);

  return (
    <>
      <h1>Задача №8</h1>
      <p>
        Реализуйте компонент, который принимает статичный массив чисел и выводит
        минимальное и максимальное значения на странице.
      </p>

      <p>массив чисел {arr}</p>
      <p>минимальное число {minNum}</p>
      <p>максимальное число {maxNum}</p>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task8;
