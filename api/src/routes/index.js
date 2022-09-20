const { Router } = require("express");
const characterRoutes = require("./characterRoutes.js");
const episodesRoutes = require("./episodesRoutes.js");

const router = Router();

router.use("/characters", characterRoutes);
router.use("/episodes", episodesRoutes);

module.exports = router;
