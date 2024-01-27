import { Link } from "react-router-dom";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";

function Task4() {
  const arr = ["anton", "asd", "qweqwe"];

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let count;
    if (i == 0) {
      count = img1;
    } else {
      if (i == 1) {
        count = img2;
      } else {
        count = img3;
      }
    }
    
    result.push(
      <div>
        <p>{arr[i]}</p> <img src={count} />
      </div>
    );
  }

  return (
    <>
      <h1>Задача №4</h1>
      <p>
        На входе статичный массив строк. Ваша задача отобразить на странице все
        строки массива, а также картинку. Каждая итерация будет возвращать{" "}
        {"<div><p>el</p> <img /></div>"}
      </p>

      <div>{result}</div>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task4;
