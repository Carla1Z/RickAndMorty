const axios = require("axios");
const { Episode } = require("../db");

const allEpisodes = async () => {
  let episodes = [];
  for (let i = 1; i < 4; i++) {
    const apiData = await axios.get(
      `https://rickandmortyapi.com/api/episode?page=${i}`
    );

    episodes = episodes.concat(apiData.data.results);

    episodes = episodes.map((el) => el.name);
    console.log(episodes);

    let episodesEach = episodes.forEach((el) => {
      Episode.findOrCreate({
        where: { name: el.name },
      });
    });
    return episodesEach;
  }
};

// episodes = episodes.concat(apiData.data.results);
// let episodesMap = episodes.map((el) => el.name);
// console.log(episodesMap);
// let episodesEach = episodes.forEach((el) => {
//   Episode.findOrCreate({
//     where: { name: el.name },
//   });
// });
// return episodesEach;

module.exports = allEpisodes;
