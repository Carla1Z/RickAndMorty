import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCharacters } from "../../redux/actions";
import Card from "../Card";

function Home() {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.characters);
  // console.log(allCharacters);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.cards}>
        {allCharacters ? (
          allCharacters.map((c) => {
            return (
              <Card
                key={c.id}
                image={c.image}
                name={c.name}
                origin={c.origin}
                species={c.species}
                episode={c.episode}
              />
            );
          })
        ) : (
          <h3>No se encontraron personajes</h3>
        )}
      </div>
    </div>
  );
}

export default Home;
