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
    episode: [],
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
      episode: [...new Set([...create.episode, e.target.value])],
    });
  };

  const handleDeleteEpisode = (e) => {
    setCreate({
      ...create,
      episode: create.episode.filter((el) => el !== e),
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
      episode: [],
    });
  };

  useEffect(() => {
    dispatch(getEpisodes());
  }, []);

  return (
    <div className={styles.create}>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
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
                required
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
                required
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
                required
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
              <select
                onChange={(e) => handleSelectEpisodes(e)}
                className={styles.selectEpisode}
              >
                {episodes.map((episode) => (
                  <option value={episode.name} key={episode.id}>
                    {episode.id} - {episode.name}
                  </option>
                ))}
              </select>
            </span>
          </div>
        </div>
        <button type="submit" className={styles.btnSubmit}>Crear</button>
      </form>

      {create.episode.length != 0 ? (
        <div className={styles.contenedorSelect}>
          <h4>Episodios</h4>
          <div className={styles.episodeSelect}>
            {create.episode.map((el) => (
              <span>
                <button
                  onClick={() => handleDeleteEpisode(el)}
                  className={styles.btnDelete}
                >
                  X
                </button>
                <p>{el}</p>
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
