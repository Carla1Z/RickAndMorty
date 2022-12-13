import styles from "./CharacterDetail.module.css";

function CharacterDetail({ characterDetail }) {
  return (
    <div>
      {characterDetail ? (
        <div className={styles.character}>
          <div className={styles.card}>
            <img
              src={characterDetail.image}
              alt="personaje"
              className={styles.image}
            />
          </div>
          <div className={styles.info}>
            <h3>{characterDetail.name}</h3>
            <p>{characterDetail.status}</p>
            <p>{characterDetail.species}</p>
            <p>{characterDetail.type}</p>
            <p>{characterDetail.gender}</p>
            <p>{characterDetail.origin ? characterDetail.origin.name : null}</p>
            <p>
              {characterDetail.location ? characterDetail.location.name : null}
            </p>
            {/* {characterDetail.episode
            ? characterDetail.episode.map((el) => {
                return <p>{el}</p>;
              })
            : null} */}
          </div>
        </div>
      ) : (
        <p>No existe el personaje</p>
      )}
    </div>
  );
}

export default CharacterDetail;
