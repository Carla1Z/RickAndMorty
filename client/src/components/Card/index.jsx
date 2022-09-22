import styles from "./Card.module.css";

function Card({ image, name, origin, species, episode }) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <img src={image} alt="character" />
      <p>{origin}</p>
      <p>{species}</p>
      <p>{episode}</p>
    </div>
  );
}

export default Card;
