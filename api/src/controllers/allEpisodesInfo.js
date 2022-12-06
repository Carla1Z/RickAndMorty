const axios = require("axios");
const { Episode } = require("../db");

const allEpisodes = async () => {
  try {
    let episodes = [];
    for (let i = 1; i < 4; i++) {
      const apiData = await axios.get(
        `https://rickandmortyapi.com/api/episode?page=${i}`
      );

      episodes = episodes.concat(apiData.data.results);
    }
    await Episode.bulkCreate(episodes);
    console.log("Se guarda en db los episodios");
  } catch (error) {
    console.log("Error en allEpisodes: ", error);
  }
};

module.exports = allEpisodes;
