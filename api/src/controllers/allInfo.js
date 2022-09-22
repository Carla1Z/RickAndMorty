const axios = require("axios");

const allCharacter = async () => {
  // const api = await axios.get('https://rickandmortyapi.com/api/character')
  // const apiNext = await axios.get(api.data.info.next)
  // console.log(apiNext.data.results);

  let character = [];
  for (let i = 1; i < 6; i++) {
    //me traigo solo las primeras 6 paginas
    const apiData = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${i}`
    );

    // console.log(apiData);

    //Para mapear apiData, necesito que sea una funcion
    //concateno
    // character = character.concat(apiData) //necesito acceder a la informacion
    character = character.concat(apiData.data.results);
    // console.log(character);
  }

  character = character.map((character) => {
    return {
      id: character.id,
      name: character.name,
      species: character.species,
      origin: character.origin.name,
      image: character.image,
      created: character.created,
    };
  });
  // console.log(character);
  return character;
};

const allEpisodes = async () => {
  let episodes = [];
  for (let i = 1; i < 4; i++) {
    const apiData = await axios.get(
      `https://rickandmortyapi.com/api/episode?page=${i}`
    );

    episodes = episodes.concat(apiData.data.results);

    episodes = episodes.map((episode) => {
      return {
        id: episode.id,
        name: episode.name,
      };
    });
    return episodes;
  }
};

module.exports = {
  allCharacter,
  allEpisodes,
};
