import { Link } from "react-router-dom";

function Task13() {
  const inpVal = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <h1>Задача №13</h1>
      <p>
        2. По событию изменения input отображать в консоль каждое вводимое
        значение
      </p>

      <input type="text" onChange={inpVal} />

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task13;
