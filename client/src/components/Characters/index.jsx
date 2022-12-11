import styles from "./Characters.module.css";
import Card from "../Card";
import { Link } from "react-router-dom";

function Characters({ allCharacters }) {
  return (
    <div>
      <div className={styles.cards}>
        {allCharacters ? (
          allCharacters.map((c) => {
            return (
              // <Link
              //   to={`/${c.id}`}
              //   key={c.id}
              //   style={{ textDecoration: "none" }}
              // >
                <Card
                  key={c.id}
                  image={c.image}
                  name={c.name}
                  origin={c.origin}
                  species={c.species}
                  episode={c.episode}
                />
              // </Link>
            );
          })
        ) : (
          <h3>No se encontraron personajes</h3>
        )}
      </div>
    </div>
  );
}

export default Characters;
