import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getName } from "../../redux/actions";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

function Searchbar({setCurrentPage}) {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");


  const submit = (e) => {
    e.preventDefault()
    dispatch(getName(search))
    setCurrentPage(1)
    setSearch("")
  }

  const input = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
    console.log(e.target.value);
  }

  return (
    <div>
      <form className={styles.form}>
        <input type="text" placeholder="Buscar..." value={search} onChange={(e)=> input(e)} className={styles.input} />
        <button type="submit" onClick={(e) => submit(e)} className={styles.button}>
        <BiSearchAlt />
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
