import { Link } from "react-router-dom";
import { useState } from "react";

function Task48() {
const [count,setCount]=useState(0)


  return (
    <>
      <h1>Задача №48</h1>
      <p>
        1. Счетчик с использованием useState: Создай компонент React, который
        отображает числовое значение и кнопки "+1" и "-1". Используйте хук
        useState для управления состоянием счетчика. При нажатии на кнопки,
        значение счетчика должно увеличиваться или уменьшаться.
      </p>

      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>+1</button>
      <button onClick={()=>setCount(count-1)}>-1</button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task48;
