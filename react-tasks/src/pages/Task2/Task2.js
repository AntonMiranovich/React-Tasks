import { Link } from "react-router-dom";

function Task2() {
  const num = [1, 2, 3, 4, 5];
  const res = num.map((el) => {
    return <h1>{Math.sqrt(el)}</h1>;
  });
  return (
    <>
      <h1>Задача #2</h1>
      <p>
        На входе статичный массив чисел. Ваша задача найти корень каждого числа
        и отобразить на странице в виде h1
      </p>

      <p>старый массив {num}</p>
      <p>новый массив {res}</p>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task2;
