import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Task59() {
  const [dataFromServer, setDataFromServer] = useState("");

  async function getInfo() {
    const data = await axios.get("https://api.ipify.org/?format=json");
    setDataFromServer(data.data.ip);
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <h1>Задача №59</h1>
      <p>
        Запрос к API с использованием useState и useEffect: Создайте компонент,
        который выполняет запрос к API https://api.ipify.org/?format=json и
        отображает полученные данные в заголовок.
      </p>

      <h1>{dataFromServer}</h1>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task59;
