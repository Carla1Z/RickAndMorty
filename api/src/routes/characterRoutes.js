const { Router } = require("express");
const { Character, Episode } = require("../db");
const { allCharacter } = require("../controllers/allInfo");

const characterRoutes = Router();

characterRoutes.get("/", async (req, res) => {
  try {
    const apiInfo = await allCharacter();
    // console.log(apiInfo);

    if (apiInfo) {
      let dbInfo = await Character.findAll({
        include: {
          model: Episode,
          attributes: ["name"],
          through: { attributes: [] },
        },
      });
      res.json([...dbInfo, ...apiInfo]);
    } else {
      res.status(404).send("Error 404, personaje no encontrado");
    }
    // res.send("GET en la ruta characters");
  } catch (error) {
    console.log("Error en la ruta GET de character" + error);
  }
});

characterRoutes.post("/", async (req, res) => {
  const { name, species, origin, image, created } = req.body;

  if (!name || !species || !origin || !image || !created)
    res.status(400).send("Faltan datos");

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
