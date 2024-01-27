import { Link } from "react-router-dom";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";

function Task4() {
  const arrObj = [
    {
      name: "anton",
      img: img1,
    },
    {
      name: "asd",
      img: img2,
    },
    {
      name: "qweqwe",
      img: img3,
    },
  ];

  const res=arrObj.map((el)=><div><p>{el.name}</p> <img src={el.img}/></div>)

  return (
    <>
      <h1>Задача №4</h1>
      <p>
        На входе статичный массив строк. Ваша задача отобразить на странице все
        строки массива, а также картинку. Каждая итерация будет возвращать{" "}
        {"<div><p>el</p> <img /></div>"}
      </p>

      <div>{res}</div>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task4;
