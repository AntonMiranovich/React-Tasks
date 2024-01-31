import { Link } from "react-router-dom";

function Task20() {
  const arr = [1, 4, "anton", "weqeadsd", 7];

  function randomEl() {
    console.log(arr[Math.floor(Math.random() * 5)]);
  }

  return (
    <>
      <h1>Задача №20</h1>
      <p>
        Создайте компонент с массивом элементов и кнопкой. При каждом клике на
        кнопку выбирайте случайный элемент из массива и отображайте его в
        консоль.
      </p>

      <p>массив элементов {arr}</p>
      <button onClick={randomEl}>Click me</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task20;
