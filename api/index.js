const server = require("./src/app.js");
const allEpisodes = require("./src/controllers/allEpisodesInfo.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001

// Syncing all the models at once.

// Para la precarga cuando se levanta el server, ejecutar la funcion getEpisodes(). Al ser una peticion vamos a usar async await.

conn.sync({ force: true }).then(() => {
  allEpisodes()
  server.listen(3001, () => {
    console.log(`Listening at ${port}`); // eslint-disable-line no-console
  });
});
