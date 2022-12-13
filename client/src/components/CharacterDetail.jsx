function CharacterDetail({ characterDetail }) {
  return (
    <div>
      {characterDetail ? (
        <div>
          <h3>{characterDetail.name}</h3>
          <img src={characterDetail.image} alt="personaje" />
          <p>{characterDetail.species}</p>
          <p>{characterDetail.gender}</p>
        </div>
      ) : (
        <p>No existe el personaje</p>
      )}
    </div>
  );
}

export default CharacterDetail;