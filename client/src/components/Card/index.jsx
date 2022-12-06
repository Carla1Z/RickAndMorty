import styles from "./Card.module.css";

function Card({ image, name, origin, species, episode }) {
  return (
    <div className={styles.card}>
      <div className={styles.front}>
        <img src={image} alt="character" />
      </div>

      <div className={styles.back}>
        <h3>{name}</h3>
        <ul>
          <li>{origin}</li>
          <li>{species}</li>
          <li>{episode}</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
