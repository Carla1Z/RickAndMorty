import styles from "./Pagination.module.css";

function Pagination({
  characterPerPage,
  allCharacters,
  paginate,
  setCurrentPage,
  currentPage,
}) {
  const nextPage = () => {
    if(currentPage < pageNumbers.length)
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  //------------------------------------------

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCharacters / characterPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      <button onClick={prevPage} className={styles.btn}>Anterior</button>
      <ul className={styles.number}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)} className={styles.btn}>{number}</button>
          </li>
        ))}
      </ul>
      <button onClick={nextPage} className={styles.btn}>Siguiente</button>
    </div>
  );
}

export default Pagination;
