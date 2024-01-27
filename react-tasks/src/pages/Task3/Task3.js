import { Link } from "react-router-dom";

function Task3() {
  const arr = ["anton@asd", "asdn@da", "dqweqwse", "wqeasd@dasd"];
  const res = arr.filter((el) => el.includes("@"));
  return (
    <>
      <h1>Задача #3</h1>
      <p>
        3. На входе статичный массив строк. Ваша задача отфильтровать и
        отобразить на странице только те строки, которые содержат знак @
      </p>

      <p>старый массив {arr}</p>
      <p>новый массив {res}</p>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task3;
