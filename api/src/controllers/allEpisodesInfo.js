const axios = require("axios");


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

module.exports = allEpisodes;
