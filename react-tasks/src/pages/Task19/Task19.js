import { Link } from "react-router-dom";

function Task19() {
  const arr = [1, 2, 3, 4];

  function resSum() {
    console.log(
      arr.reduce((sum, el) => {
        return sum + el;
      }, 0)
    );
  }

  return (
    <>
      <h1>Задача №19</h1>
      <p>
        Реализуйте компонент с массивом чисел и кнопкой. При клике на кнопку
        вычислите и выведите сумму всех чисел из массива в консоль.
      </p>

      <p>массив чисел {arr}</p>
      <button onClick={resSum}>Сlick to find out the sum of the array</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task19;
