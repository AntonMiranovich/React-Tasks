import { Link } from "react-router-dom";

function Task1() {
  const num = [1, 2, 3, 4];
  const res = num.map((el) => {
    return el ** 2;
  });

  return (
    <>
      <h1>Задача №1</h1>
      <p>
        На входе статичный массив чисел. Ваша задача каждое число массива
        возвести в квадрат и отобразить на странице{" "}
      </p>

      <p>старый массив {num}</p>
      <p>новый массив {res}</p>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task1;
