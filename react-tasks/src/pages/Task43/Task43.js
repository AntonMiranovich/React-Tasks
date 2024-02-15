import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Task43() {
  const [universities, setUniversitie] = useState([]);

  async function getUniversitie() {
    const result = await axios.get(
      "http://universities.hipolabs.com/search?country=Belarus"
    );
    setUniversitie(result.data);
  }

  useEffect(() => {
    getUniversitie();
  }, []);

  return (
    <>
      <h1>Задача №43</h1>
      <p>
        При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
        http://universities.hipolabs.com/search?country=Belarus. API возвращает
        университеты страны переданной в качестве одного из доментов url. Ваша
        задача отображать все университеты в тег параграф.
      </p>

      <div>
        {universities.map((el) => (
          <p>{el.name}</p>
        ))}
      </div>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task43;
