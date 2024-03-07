import { Link } from "react-router-dom";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { TaskContext } from "../../Context/Context";

function Task72() {
  const { task72Context } = useContext(TaskContext);
  const [black, white] = task72Context;
  const [flag, setFlag] = useState(true);

  return (
    <div style={flag ? white : black}>
      <h1>Задача №72</h1>
      <p>
        Разработайте простое приложение для переключения между светлой и темной
        темами. Используйте useContext, чтобы хранить информацию о текущей теме
        (светлая или темная). В компоненте отобразите интерфейс, который
        позволяет пользователю переключаться между темами.
      </p>

      <h1>Hello World</h1>

      <button style={flag ? black : white} onClick={() => setFlag(!flag)}>
        {flag ? "BLACK" : "WHITE"}
      </button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </div>
  );
}

export default Task72;
