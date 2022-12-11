import styles from "./Create.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { postCharacter } from "../../redux/actions";

export default function Create() {
  const dispatch = useDispatch();
  const [create, setCreate] = useState({
    name: "",
    origin: "",
    species: "",
    image: "",
  });

  const handleChange = (e) => {
    setCreate({
      ...create,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCharacter(create));
    alert("Personaje creado!")
    setCreate({
      name: "",
      origin: "",
      species: "",
      image: "",
    });
  };

  return (
    <div className={styles.create}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.row}>
          <div>
            <span>
              <label className={styles.label}>Nombre</label>
              <input
                className={styles.input}
                type="text"
                name="name"
                value={create.name}
                onChange={(e) => handleChange(e)}
                placeholder="Nombre de tu personaje"
              />
            </span>
            <span>
              <label className={styles.label}>Origen</label>
              <input
                className={styles.input}
                type="text"
                name="origin"
                value={create.origin}
                onChange={(e) => handleChange(e)}
                placeholder="..."
              />
            </span>
            <span>
              <label className={styles.label}>Especie</label>
              <input
                className={styles.input}
                type="text"
                name="species"
                value={create.species}
                onChange={(e) => handleChange(e)}
                placeholder="..."
              />
            </span>
          </div>
          <div>
            <span>
              <label className={styles.label}>Imágen</label>
              <input
                className={styles.input}
                type="text"
                name="image"
                value={create.image}
                onChange={(e) => handleChange(e)}
                placeholder="http://wwww.example.com/"
              />
            </span>
            <span>
              <label className={styles.label}>Episodios</label>
              <select name="" id="">
                <option value="">Episodio 1</option>
                <option value="">Episodio 2</option>
              </select>
            </span>
          </div>
        </div>
        <button type="submit" >
          Crear
        </button>
      </form>
    </div>
  );
}
