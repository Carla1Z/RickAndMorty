import styles from "./Create.module.css";
import { useDispatch } from "react-redux";
import { postCharacter } from "../../redux/actions";
import { useState } from "react";
import axios from "axios";

function Create() {
  const dispatch = useDispatch();
  const [create, setCreate] = useState({
    name: "",
    origin: "",
    species: "",
    image: "",
    episodes: [],
  });

  const [errorButton, setErrorButton] = useState(
    // Object.keys(errorForm).length < 1 ? false : true
  );

  const [errorForm, setErrorForm] = useState({});

  //Funcion para completar los cambios --> avisa errores,validar
  //Funcion para enviar el formulario ---> sin errores, previamente validado

  const handleChange = (e) => {
    setCreate({
      ...create,
      [e.target.name]: e.target.value,
    });
    //↑↑ asigno valor
    //↓↓ valido
    // validate(create)
    setErrorForm(validate(create));
    console.log(create);
  };

  const handleEpisodes = (e) => {
    setCreate({
      ...create,
      //new Set elimina los valores repetidos
      episodes: [...new Set([...create.episodes, e.target.value])],
      // episodes: Array.from(new Set([...create.episodes, e.target.value])),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorForm(validate(create))
    // dispatch(postCharacter(create));
    await axios.post("http://localhost:3001/characters", create)
    setCreate({
      name: "",
      origin: "",
      species: "",
      image: "",
      episodes: [],
    });
    alert("Personaje creado")
  };

  const validate = (info) => {
    let errores = {};
    if (validName(info.name)) errores.name = "Hay errores en el nombre";
    if (!info.species || typeof info.species !== "string")
      errores.species = "Hay errores en especie";

    return errores;
    //el objeto de errores puede estar vacio o tener propiedades
    //si contiene propiedades es que hay errores en el codigo
  };

  function validName(str) {
    if (typeof str !== "string") return true;
    if (str.length < 3) return true;
  }

  return (
    <div className={styles.create}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <span>Nombre: </span>
          <input
            name="name"
            onChange={handleChange}
            type="text"
            value={create.name}
            placeholder="Nombre de tu create"
          />
          {errorForm.name ? (
            <h4>
              <small>{errorForm.name}</small>
            </h4>
          ) : (
            false
          )}
        </label>
        <label>
          <span>Origen: </span>
          <input
            name="origin"
            onChange={handleChange}
            type="text"
            value={create.origin}
            placeholder="..."
          />
        </label>
        <label>
          <span>Especie: </span>
          <input
            name="species"
            onChange={handleChange}
            type="text"
            value={create.species}
            placeholder="..."
          />
          {errorForm.species ? (
            <h4>
              <small>{errorForm.species}</small>
            </h4>
          ) : (
            false
          )}
        </label>
        <label>
          <span>Imágen: </span>
          <input
            name="image"
            onChange={handleChange}
            type="text"
            value={create.image}
            placeholder="http://wwww.example.com/"
          />
        </label>
        <label>
          <span>Episodios: </span>
          <select
            name="episodes"
            value={create.episodes}
            onChange={handleEpisodes}
            required
          >
            <option value={1}>Episodio 1</option>
            <option value={2}>Episodio 2</option>
          </select>
        </label>
        <label>
          <input
            type="submit"
            value="Crear"
            disabled={errorButton}
            // className={styles.button}
          />
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
