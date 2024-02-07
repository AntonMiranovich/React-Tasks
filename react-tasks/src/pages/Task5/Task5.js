import { Link } from "react-router-dom";

function Task5() {
  const arr = [1, "anton", 2, 4, 3, "sad"];

  const res = arr.map((el) => {
    if (isNaN) {
      return <p>{el}</p>;
    } else {
      if (el % 2 === 0) {
        return `${el} четное`;
      } else {
        return `${el} не четное`;
      }
    }
  });

  return (
    <>
      <h1>Задача №5</h1>
      <p>
        На входе статичный массив чисел и букв. Ваша задача отобразить на
        странице в случае числа четность и нечетность текущего значения в
        параграфе, в случае строки отобразить саму строку в параграфе
      </p>

      <p>{res}</p>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task5;
