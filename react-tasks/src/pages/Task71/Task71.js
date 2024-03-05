import { Link } from "react-router-dom";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { TaskContext } from "../../Context/Context";

function Task71() {
  const { tast71Constext } = useContext(TaskContext);

  return (
    <>
      <h1>Задача №71</h1>
      <p>
        Разработайте приложение для отображения текущей погоды. Используйте
        useContext, чтобы хранить информацию о погоде (температура, влажность,
        скорость ветра и т. д.). В компоненте отобразите эту информацию о
        погоде.
      </p>

      <h1>Температура: {tast71Constext.temperature}</h1>
      <h1>Влажность: {tast71Constext.humidity}</h1>
      <h1>Скорость ветра: {tast71Constext.windSpeed}</h1>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task71;
