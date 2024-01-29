import { Link } from "react-router-dom";

function Task14() {
  function check(e) {
    if (e.key === "Enter") {
      e.target.value === e.target.value.split("").reverse().join("")
        ? console.log(true)
        : console.log(false);
    }
  }

  return (
    <>
      <h1>Задача №14</h1>
      <p>
        По нажатию на enter в input onKeyDown выявлять является ли введенное
        слово палиндромом. Результат проверки отобразить в консоль
      </p>

      <input type="text" onKeyDown={check} />

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task14;
