import { Link } from "react-router-dom";
import { useState } from "react";

function Task53() {
  const [valInp, setValInp] = useState("");
  const [result, setResult] = useState("");

  return (
    <>
      <h1>Задача №53</h1>
      <p>
        Форма с использованием useState: Создайте компонент текстового поля,
        который позволяет пользователю вводить текст и проверять введенный текст
        регулярным выражением на почту по нажатию на кнопку. В заголовок
        отобразить true если введенная строка удовлетворяет регулярному
        выражению и false в противном случае.
      </p>

      <input type="text" onChange={(e) => setValInp(e.target.value)} />
      <button
        onClick={() =>
          setResult(String(/^[a-z0-9]+\@[a-z]+\.[a-z]+$/gm.test(valInp)))
        }
      >
        click
      </button>
      <h1>{result}</h1>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task53;
