import { Link } from "react-router-dom";
import style from "./style.module.css";

function Task11() {
  const res = [1, 2, "anton", "asddaw", 4].map((el) => {
    if (isNaN(el)) {
      return <p className={style.string}>{el}</p>;
    } else {
      return <p className={style.number}>{el}</p>;
    }
  });

  return (
    <>
      <h1>Задача №11</h1>
      <p>
        Создайте компонент, который принимает статичный массив чисел и строк.
        Если элемент - число, то отобразите его в параграфе с зеленым цветом
        текста, если строка - с синим.
      </p>

      <div>{res}</div>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task11;
