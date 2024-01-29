import { Link } from "react-router-dom";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";

function Task10() {
  const arrObj = [
    {
      title: "Оливъе",
      description: "Салат",
      img: img1,
    },
    {
      title: "Борщ",
      description: "Суп",
      img: img2,
    },
    {
      title: "Шаурма",
      description: "Вредная гадость, но вкусная блин",
      img: img3,
    },
  ];

  const res = arrObj.map((el) => (
    <div>
      <h1>{el.title}</h1>
      <p>{el.description}</p>
      <img src={el.img} alt="" />
    </div>
  ));

  return (
    <>
      <h1>Задача №10</h1>
      <p>
        Реализуйте компонент, который принимает массив объектов с полями title –
        название рецепта, description – описание рецепта и image – картинка
        блюда. Для каждого объекта создайте карточку с заголовком, описанием и
        изображением. Добавьте немного стилей
      </p>

      <div>{res}</div>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task10;
