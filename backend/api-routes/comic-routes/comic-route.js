const express = require("express");
const router = express.Router();
const comicController = require("../../controllers");

router.get("/comics", comicController.comicsController.getComics);
module.exports = router;
