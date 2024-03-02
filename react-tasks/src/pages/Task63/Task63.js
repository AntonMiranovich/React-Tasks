import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

function Task63() {
  const [ip, setIp] = useState("");
  
  async function getData() {
    const response = await axios.get("https://api.ipify.org/?format=json");
    return response.data.ip;
  }

  const getIp = useMemo(async () => {
    const res = await getData();
    setIp(res);
  }, []);

  return (
    <>
      <h1>Задача №63</h1>
      <p>
        Реализуйте компонент, который отображает IP-адрес пользователя. IP-адрес
        должен быть получен с использованием useMemo при монтировании компонента
        и кэширован для избегания повторных запросов к API при обновлении других
        частей компонента. https://api.ipify.org/?format=json
      </p>

      <h1>{ip}</h1>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task63;
