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
    <div>
      <button onClick={prevPage}>Anterior</button>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
      <button onClick={nextPage}>Siguiente</button>
    </div>
  );
}

export default Pagination;
