import styles from "./Nav.module.css";
import Searchbar from "../Searchbar";
import icon from "../../assets/icon.png";

function Nav() {
  return (
    <div className={styles.nav}>
      <img src={icon} alt="icon" />
      <Searchbar />
    </div>
  );
}

export default Nav;
