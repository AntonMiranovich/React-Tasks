import { Link } from "react-router-dom";

function Task18() {
  const arrNum = [1, 2, 3, 4, 1, 2, 5];

  const res = [];

  arrNum.forEach((el) => {
    if (!res.includes(el)) res.push(el);
  });

  return (
    <>
      <h1>Задача №18</h1>
      <p>
        Реализуйте компонент, который принимает статичный массив и отображает
        только уникальные значения, убирая повторяющиеся.
      </p>

      <p>старый массив {arrNum}</p>
      <p>новый неповторяющийся массив {res}</p>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task18;
