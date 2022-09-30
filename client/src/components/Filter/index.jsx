import styles from "./Filter.module.css";
import { Link } from "react-router-dom";
import { getCharacters, getOrderAbc } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function Filter({ setOrden }) {
  const dispatch = useDispatch();


  const ordenAbc = (e) => {
    dispatch(getOrderAbc(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
  };

  return (
    <div className={styles.filter}>
      <div>
        <Link to="/form">
          <button className={styles.button}>Crear personaje</button>
        </Link>
      </div>

      <select onChange={(e) => ordenAbc(e)} className={styles.abc}>
        <option value="all">...</option>
        <option value="asc">A - Z </option>
        <option value="desc">Z - A</option>
      </select>
    </div>
  );
}

export default Filter;
