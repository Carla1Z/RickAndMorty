import Characters from "../../components/Characters";
import Nav from "../../components/Nav";
import Pagination from "../../components/Pagination";
import styles from "./Home.module.css";
import banner from "../../assets/banner.jpg";
import Filter from "../../components/Filter";
import { getCharacters, getOrderAbc } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.characters);
  const [currentPage, setCurrentPage] = useState(1);
  const [characterPerPage] = useState(6);

  const lastCharacter = currentPage * characterPerPage;
  const firstCharacter = lastCharacter - characterPerPage;
  const currentCharacter = allCharacters.slice(firstCharacter, lastCharacter);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  //Ordenamiento
  const [orden, setOrden] = useState("")



  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);
  return (
    <div>
      <Nav setCurrentPage={setCurrentPage} />
      <div className={styles.home}>
        <img src={banner} alt="rick and morty" className={styles.banner} />
        <Filter setOrden={setOrden} />
        <Pagination
          allCharacters={allCharacters.length}
          characterPerPage={characterPerPage}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Characters allCharacters={currentCharacter} />
      </div>
    </div>
  );
}

export default Home;
