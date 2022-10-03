const axios = require("axios");
const { Character, Episode } = require("../db");

const allCharacter = async () => {
  let character = [];
  for (let i = 1; i < 6; i++) {
    //me traigo solo las primeras 6 paginas
    const apiData = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${i}`
    );
    // console.log(apiData);

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


const dbCharacter = async () => {
  return await Character.findAll({
    include: {
      model: Episode,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const allCharacterInfo = async () => {
  const apiInfo = await allCharacter();
  const dbInfo = await dbCharacter();
  const infoTotal = apiInfo.concat(dbInfo);

  return infoTotal
};

module.exports = {
  allCharacter,
  dbCharacter,
  allCharacterInfo,
};
