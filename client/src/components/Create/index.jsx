import styles from "./Create.module.css";

function Create() {
  return (
    <div className={styles.create}>
      <form className={styles.form}>
        <label>
          <span>Nombre: </span>
          <input type="text" placeholder="Nombre de tu personaje" />
        </label>
        <label>
          <span>Origen: </span>
          <input type="text" placeholder="..." />
        </label>
        <label>
          <span>Especie: </span>
          <input type="text" placeholder="..." />
        </label>
        <label>
          <span>Imágen: </span>
          <input type="text" placeholder="http://wwww.example.com/" />
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
