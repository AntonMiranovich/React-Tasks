import { Link } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

function Task68() {
  const [list, setList] = useState([]);
  const [inpVal, setInpVal] = useState("");

  const addAndDelete = useCallback(() => {
    return list.map((el, index) => (
      <li key={index}>
        <button
          id={el}
          onClick={(e) => setList(list.filter((el) => el != e.target.id))}
        >
          delete
        </button>
        {el}
      </li>
    ));
  }, [list]);

  return (
    <>
      <h1>Задача №68</h1>
      <p>
        Создайте компонент, который позволяет пользователю добавлять и удалять
        элементы из списка. Используйте useCallback, чтобы оптимизировать
        функции добавления и удаления элементов.
      </p>

      <input
        value={inpVal}
        type="text"
        onChange={(e) => setInpVal(e.target.value)}
      />
      <button
        onClick={() => {
          setList([...list, inpVal]);
          setInpVal("");
        }}
      >
        ADD
      </button>

      <ul>{addAndDelete()}</ul>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task68;
