import styles from "./SearchBar.module.css";

function Searchbar() {
  return (
    <div className={styles.searchbar}>
      <input type="text" className={styles.search} />
      <input type="submit" className={styles.button} />
    </div>
  );
}

export default Searchbar;
