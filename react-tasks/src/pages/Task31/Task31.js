import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Task31() {
  const [data, setData] = useState({});

  async function getData() {
    const request = await fetch("https://api.ipify.org/?format=json", {
      method: "GET",
    });
    

    setData(await request.json());
  }

  useEffect(() => getData(), []);

  return (
    <>
      <h1>Задача №31</h1>
      <p>
        Запрос к API с использованием useState и useEffect: Создайте компонент,
        который выполняет запрос к API https://api.ipify.org/?format=json и
        отображает полученные данные в заголовок.
      </p>

      <h1>{Object.entries(data)}</h1>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task31;
