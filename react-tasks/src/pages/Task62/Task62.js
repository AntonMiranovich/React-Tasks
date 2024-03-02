import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import axios from "axios";

function Task62() {
  const [val, setVal] = useState(0);

  function change(e) {
    setVal(e.target.value);
  }

  const doSum = useMemo(() => {
    let res = 0;
    for (let i = 0; i <= val; i++) {
      res += i;
    }
    return res;
  }, [val]);

  return (
    <>
      <h1>Задача №62</h1>
      <p>
        Создайте компонент для отображения списка чисел от 1 до N, где N -
        число, введенное пользователем с клавиатуры. Используйте useMemo, чтобы
        вычислить сумму списка чисел только при изменении N
      </p>

      <input type="text" onChange={change} />
      <h1>{doSum}</h1>
      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task62;
