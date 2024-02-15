import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Task47() {
  const [univers, setUnivers] = useState([]);
  const [flag, setFlag] = useState(false);

  async function getUnivers() {
    const res = await axios.get(
      "http://universities.hipolabs.com/search?country=Belarus"
    );
    setUnivers(res.data);
  }

  useEffect(() => {getUnivers()}, []);

  return (
    <>
      <h1>Задача №47</h1>
      <p>
        Совместить задачи 3 и 6. По клику на кнопку отображать университеты
        выбранной страны
      </p>
      <button onClick={() => setFlag(!flag)}>Click</button>
      {flag ? univers.map((el) => <p>{el.name}</p>) : null}

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task47;
