import styles from "./Create.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getEpisodes, postCharacter } from "../../redux/actions";
import { useEffect } from "react";

export default function Create() {
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.episodes);
  const [create, setCreate] = useState({
    name: "",
    origin: "",
    species: "",
    image: "",
    episodes: [],
  });

  const handleChange = (e) => {
    setCreate({
      ...create,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectEpisodes = (e) => {
    setCreate({
      ...create,
      episodes: [...new Set([...create.episodes, e.target.value])],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCharacter(create));
    alert("Personaje creado!");
    setCreate({
      name: "",
      origin: "",
      species: "",
      image: "",
    });
  };

  useEffect(() => {
    dispatch(getEpisodes());
  }, []);

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
              <select onChange={(e) => handleSelectEpisodes(e)}>
                {
                  episodes.map(episode => (
                    <option value={episode.name} key={episode.id}>{episode.id} - {episode.name}</option>
                  ))
                }
              </select>
            </span>
          </div>
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}
