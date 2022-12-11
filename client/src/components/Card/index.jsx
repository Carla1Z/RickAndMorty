import styles from "./Card.module.css";

function Card({ image, name, origin, species, episode }) {
  return (
    <div className={styles.cardR}>
      <div className={styles.card}>
        <div className={styles.card2}>
          <div className={styles.contain}>
            <img src={image} alt="character" className={styles.character} />
            <div className={styles.list}>
              <h3>{name}</h3>
              <ul>
                <li>{species}</li>
                <li>{origin}</li>
                <li>{episode}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
