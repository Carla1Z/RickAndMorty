const { Router } = require("express");
const { Character, Episode } = require("../db");
const { default: axios } = require("axios");
const { allCharacterInfo } = require("../controllers/allCharacterInfo");

const characterRoutes = Router();

characterRoutes.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id.length > 5) {
      let character = await Character.findByPk(id);
      res.status(200).send(character);
      // res.send('if de la ruta id')
    } else {
      let character = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      character = character.data;
      // console.log(character);
      res.status(200).send(character);
      // res.send('else de la ruta id')
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
      let characterName = await apiInfo.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );

      characterName.length ? res.status(200).send(characterName) : res.status(404).send("Error 404, personaje no encontrado")
    } else {
      res.status(200).send(apiInfo);
    }
    // res.send("GET en la ruta characters");
  } catch (error) {
    console.log("Error en la ruta GET de character" + error);
  }
});

characterRoutes.post("", async (req, res) => {
  const { name, species, origin, image, created } = req.body;

  // if (!name || !species || !origin || !image || !created)
  //   res.status(400).send("Faltan datos");

  try {
    const db = { name, species, origin, image, created };
    const newCharacter = await Character.create(db);

    res.status(200).send(newCharacter);
    //   res.send("POST en la ruta character");
  } catch (error) {
    console.log("Error en la ruta POST de character" + error);
  }
});

module.exports = characterRoutes;
