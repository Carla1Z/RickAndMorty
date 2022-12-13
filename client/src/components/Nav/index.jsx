import styles from "./Nav.module.css";
import Searchbar from "../Searchbar";
import logo from "../../assets/logo.png";
//prueba
function Nav({setCurrentPage}) {
  return (
    <div className={styles.nav}>
      <img src={logo} alt="logo" />
      <Searchbar setCurrentPage={setCurrentPage} className={styles.searchbar} />
    </div>
  );
}

export default Nav;
