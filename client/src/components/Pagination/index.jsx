function Pagination({ characterPerPage, allCharacters, paginate }){
    const pageNumbers= []

    for (let i = 0; i <= Math.ceil(allCharacters/ characterPerPage); i++) {
        pageNumbers.push(i)
    }

    return(
        <div>
            <ul>
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <a onClick={() => paginate(number)}>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination;