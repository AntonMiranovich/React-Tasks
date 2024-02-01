import { Link } from "react-router-dom";
import { useState } from "react";

function Task25() {
  const [flage, setFlage] = useState(false);
  const [inp, setInp] = useState("");

  function checkImp(e) {
    setInp(e.target.value);
  }

  function change() {
    setFlage(true);
  }

  return (
    <>
      <h1>Задача №25</h1>
      <p>
        Создайте компонент с полем ввода имени и кнопкой "Привет". При вводе
        имени в поле и нажатии на кнопку, компонент должен отображать
        приветственное сообщение с именем, введенным пользователем
      </p>

      <input type="text" onChange={checkImp} />
      <button onClick={change}>Привет</button>
      <h1>Результат:{flage ? " Привет " + inp : null}</h1>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task25;
