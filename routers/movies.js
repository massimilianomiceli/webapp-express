//IMPORTO EXPRESS
const express = require("express");

const moviesRouter = express.Router();

//IMPORTO LE FUNZIONI DEL CONTROLLER
const moviesController = require("../controllers/moviesController");

//ROTTA INDEX
moviesRouter.get("/", moviesController.index);

//ROTTA SHOW
moviesRouter.get("/:id", moviesController.show);

module.exports = moviesRouter;
