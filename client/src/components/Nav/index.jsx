import styles from "./Nav.module.css";
import Searchbar from "../Searchbar";
// import logo from "../../assets/logo.png";
import logo from "../../assets/logo.png";

function Nav() {
  return (
    <div className={styles.nav}>
      <img src={logo} alt="logo" />
      <Searchbar  className={styles.searchbar} />
    </div>
  );
}

export default Nav;
