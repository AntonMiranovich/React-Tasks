import { Link } from "react-router-dom";
import { useState } from "react";

function Task52() {
  const [task, setTask] = useState(["job", "read", "play", "sleep"]);
  const [inpVal, setInpVal] = useState("");

  return (
    <>
      <h1>Задача №52</h1>
      <p>
        Список задач с использованием useState: Создайте компонент списка задач,
        который позволяет пользователю добавлять и удалять задачи из списка.
      </p>

      <div>
        {task.map((el, i) => (
          <p key={i}>
            {el}
            <button
              onClick={(e) => setTask(task.filter((el) => el != e.target.id))}
              id={el}
            >
              Delete
            </button>
          </p>
        ))}
      </div>

      <input
        type="text"
        placeholder="добавить задачу"
        onChange={(e) => setInpVal(e.target.value)}
      />
      <button
        onClick={() => {
          setTask([...task, inpVal]);
          setInpVal("");
        }}
      >
        Добавить
      </button>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task52;
