import { Link } from "react-router-dom";

function Task12() {
  const pass1 = "awdwdwadasdw12121@";
  const pass2 = "awdwdwadasdw12121@";

  function checkPass() {
    try {
      if (!/^[A-z0-9\!\@\#\$\%]{8,}$/gm.test(pass1 || pass2))
        throw new Error("неподходящий пороль");
      pass1 === pass2 ? console.log(true) : console.log(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <h1>Задача №12</h1>
      <p>
        На входе 2 статичные переменные пароля. По клику на кнопку необходимо
        реализовать метод валидации. Написать регулярное выражение: пароль от 8
        символов, содержит числа, буквы, !@#$^&*. Результат отобразить в консоль
      </p>

      <button onClick={checkPass}>Click</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task12;
