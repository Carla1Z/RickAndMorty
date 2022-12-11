const { Router } = require("express");
const { Episode } = require("../db");


const episodesRoutes = Router();

episodesRoutes.get("/", async (req, res) => {
  try {
    const episodes = await Episode.findAll();
    res.json(episodes);
  } catch (error) {
    console.log("Error en la ruta get episodes =>" + error);
  }
});


module.exports = episodesRoutes;
