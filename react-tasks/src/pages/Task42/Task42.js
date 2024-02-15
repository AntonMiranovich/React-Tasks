import { Link } from "react-router-dom";
import { useState } from "react";

function Task42() {
  const [expression, setExpression] = useState({
    valueInp: "",
    calculation: "Тут будет ответ",
  });

  return (
    <>
      <h1>Задача №42</h1>
      <p>
        сделайте инпут в который вводится математическое выражение по клику на
        кнопку посчитать результат мат выражения (eval()) и отобразить результат
        в h1
      </p>

      <input
        placeholder="введите мат. значение"
        type="text"
        onChange={(e) =>
          setExpression({ ...expression, valueInp: e.target.value })
        }
      />

      <button
        onClick={() =>
          /^[0-9\%\+\*\/\-]+/gm.test(expression.valueInp) ? 
            setExpression({
                ...expression,
                calculation: eval(expression.valueInp),
              })
            : setExpression({
                ...expression,
                calculation: "вы ввели некорректное математическае вырожение",
              })
        }
      >
        Click
      </button>

      <h1>{expression.calculation}</h1>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task42;
