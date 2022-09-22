import { Link } from "react-router-dom";
import Characters from "../../components/Characters";
import Nav from "../../components/Nav";
import styles from "./Home.module.css";
import banner from "../../assets/banner.jpg";

function Home() {
  return (
    <div>
      <Nav />
      <div className={styles.home}>
        <img src={banner} alt="rick and morty" className={styles.banner} />
        <Link to="/form">
          <button className={styles.button}>Crear personaje</button>
        </Link>
        <Characters />
      </div>
    </div>
  );
}

export default Home;
