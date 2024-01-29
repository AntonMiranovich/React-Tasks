import { Link } from "react-router-dom";

function Task9() {
  const arr = [
    "asdqweqeqwesdadqweqe",
    "anton",
    "asdqwewq",
    "qweqweqwdqwfqwerqw",
  ];
  const res = arr.filter((el) => el.length <= 10);

  return (
    <>
      <h1>Задача №9</h1>
      <p>
        Создайте компонент, который принимает массив строк и фильтрует строки,
        оставляя только те, длина которых не превышает 10 символов.
      </p>

      <p>начальный массив строк {arr}</p>
      <p>результат {res}</p>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task9;
