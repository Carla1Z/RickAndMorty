const { Router } = require("express");
const allEpisodes = require("../controllers/allEpisodesInfo");
const { Episode } = require("../db");


const episodesRoutes = Router();

episodesRoutes.get("/", async (req, res) => {
  try {
    const apiInfo = await allEpisodes()
    // console.log(apiInfo);
    await Episode.bulkCreate(apiInfo)

    const episodes = await Episode.findAll();
    res.json(episodes);
    // res.send("Ruta GET episodes");
  } catch (error) {
    console.log("Error en la ruta get episodes =>" + error);
  }
});


module.exports = episodesRoutes;
