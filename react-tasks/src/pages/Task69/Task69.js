import { Link } from "react-router-dom";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { TaskContext } from "../../Context/Context";
import axios from "axios";

function Task69() {
  const {tast69Constext} = useContext(TaskContext);

  return (
    <>
      <h1>Задача №69</h1>
      <p>
        Используйте useContext, чтобы сохранять данные о текущем пользователе.
        Отобразите эту информацию в компоненте, используя контекст.
      </p>

      <h1>{tast69Constext.id}</h1>
      <h1>{tast69Constext.name}</h1>
      <h1>{tast69Constext.surname}</h1>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task69;
