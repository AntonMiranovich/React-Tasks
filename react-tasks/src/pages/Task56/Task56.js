import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Task56() {
  const [inpVal, setInpVal] = useState("");
  const [answer, setAnswer] = useState("");

  async function getAnAnswer() {
    const data = await axios.get("https://yesno.wtf/api");
    setAnswer(data.data.answer);
  }

  return (
    <>
      <h1>Задача №56</h1>
      <p>
        Форма с отправкой запроса к API с использованием useState: Создайте
        компонент, который предоставляет input, button. После ввода данных в
        input по нажатию кнопку необходимо отправлять асинхронный запрос к API
        https://yesno.wtf/api с получением рандомно сгенерированного “да/нет”.
        Отобразить результат в заголовок. Таким образом у вас получается игра в
        предсказателя: где пользователь вводит вопрос в input, а далее получает
        ответ на заданный вопрос.
      </p>

      <input
        type="text"
        placeholder="введите вопрос"
        onChange={(e) => setInpVal(e.target.value)}
      />
      <button onClick={getAnAnswer}>Получить ответ</button>
      <p>
        {inpVal} : {answer}
      </p>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task56;
