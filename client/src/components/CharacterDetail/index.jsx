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
            <div className={styles.detail}>
              <p>
                <u>Estado</u>: {characterDetail.status}
              </p>
              <p>
                <u>Especie</u>: {characterDetail.species}
              </p>
              <p>{characterDetail.type}</p>
              {!characterDetail.originDb ? (
                <p>
                  <u>Género</u>: {characterDetail.gender}
                </p>
              ) : null}
              <p>
                <u>Origen</u>:{" "}
                {characterDetail.origin ? characterDetail.origin.name : null}
              </p>
              <p>
                <u>Ubicación:</u>:{" "}
                {characterDetail.location
                  ? characterDetail.location.name
                  : null}
              </p>
              {/* {characterDetail.episode
            ? characterDetail.episode.map((el) => {
              return <p>{el}</p>;
            })
          : null} */}
            </div>
          </div>
        </div>
      ) : (
        <p>No existe el personaje</p>
      )}
    </div>
  );
}

export default CharacterDetail;
