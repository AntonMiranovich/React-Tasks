import { Link } from "react-router-dom";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { TaskContext } from "../../Context/Context";


function Task78() {
  return (
    <>
      <h1>Задача №78</h1>
      <p>

      </p>

      <Link to={"/"}> Перейти на главную страницу</Link>
    </>
  );
}

export default Task78;