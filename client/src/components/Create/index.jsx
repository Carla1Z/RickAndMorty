import styles from "./Create.module.css";
import { useDispatch } from "react-redux";
import { postCharacter } from "../../redux/actions";
import { useState } from "react";

function Create() {
  const dispatch = useDispatch();
  const [create, setCreate] = useState({
    name: "",
    origin: "",
    species: "",
    image: "",
  });

  const [errorButton, setErrorButton] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCharacter());
    setCreate({
      name: "",
      origin: "",
      species: "",
      image: "",
    })
  };

  return (
    <div className={styles.create}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <span>Nombre: </span>
          <input
            type="text"
            value={create.name}
            placeholder="Nombre de tu create"
          />
        </label>
        <label>
          <span>Origen: </span>
          <input type="text" value={create.origin} placeholder="..." />
        </label>
        <label>
          <span>Especie: </span>
          <input type="text" value={create.species} placeholder="..." />
        </label>
        <label>
          <span>Imágen: </span>
          <input
            type="text"
            value={create.image}
            placeholder="http://wwww.example.com/"
          />
        </label>
        <label>
          <input type="submit" value="Crear" className={styles.button} />
        </label>
      </form>
    </div>
  );
}

// Nombre
// Origen
// Especie
// Imágen
export default Create;
