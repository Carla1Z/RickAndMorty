import styles from "./Filter.module.css";
import { Link } from "react-router-dom";
import { getCharacters, getOrderAbc } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function Filter() {
  const dispatch = useDispatch();
  const [orden, setOrden] = useState("");
  const [abc, setAbc] = useState("");

  useEffect(() => {
    if (orden !== "") {
      if (orden === "all") {
        dispatch(getCharacters());
      } else {
        dispatch(getOrderAbc());
      }
    }
  }, [dispatch]);

  const orderAbc = (e) => {
    setOrden(e.target.value);
    setAbc(`Ordenado ${e.target.value}`);
  };

  return (
    <div className={styles.filter}>
      <div>
        <Link to="/form">
          <button className={styles.button}>Crear personaje</button>
        </Link>
      </div>

      <select onChange={(e) => orderAbc(e)} className={styles.abc}>
        <option value="all">...</option>
        <option value="asc">A - Z </option>
        <option value="desc">Z - A</option>
      </select>
    </div>
  );
}

export default Filter;
