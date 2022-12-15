const { Router } = require("express");
const { Character, Episode } = require("../db");
const { default: axios } = require("axios");
const { allCharacterInfo, dbCharacter } = require("../controllers/allCharacterInfo");

const characterRoutes = Router();

characterRoutes.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id.length > 5) {
      let character = await dbCharacter(id);
      let character2 = character[0]
      res.status(200).send(character2);
    } else {
      let character = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      character = character.data;
      res.status(200).send(character);
    }
  } catch (error) {
    res.send("Error en la ruta ID= " + error);
  }
});

characterRoutes.get("", async (req, res) => {
  try {
    const { name } = req.query;
    let apiInfo = await allCharacterInfo();

    if (name) {
      let characterName = apiInfo.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );

      characterName.length
        ? res.status(200).send(characterName)
        : res.status(404).send("Error 404, personaje no encontrado");
    } else {
      res.status(200).send(apiInfo);
    }
  } catch (error) {
    console.log("Error en la ruta GET de character" + error);
  }
});

characterRoutes.post("", async (req, res) => {
  const { name, species, origin, image, episode } = req.body;

  // if (!name || !species || !origin || !image || !created)
  //   res.status(400).send("Faltan datos");

  try {
    let newCharacter = await Character.create({
      name,
      species,
      origin,
      image:
        image ||
        "https://images.fanart.tv/fanart/rick-and-morty-584c0c323de5b.jpg",
    });
    let searchEpisode = await Episode.findAll({
      where: { name: episode },
    });

    newCharacter.addEpisode(searchEpisode);
    res.status(200).send("Personaje creado");
  } catch (error) {
    console.log("Error en la ruta POST de character" + error);
  }
});

module.exports = characterRoutes;
