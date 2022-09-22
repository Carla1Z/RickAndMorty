import styles from "./css/Form.module.css";
import Create from "../components/Create";
import { Link } from "react-router-dom";

function Form() {
  return (
    <div className={styles.form}>
      <Link to="/">
        <button>Volver</button>
      </Link>
      <Create />
    </div>
  );
}

export default Form;
