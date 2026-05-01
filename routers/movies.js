//IMPORTO EXPRESS
const express = require("express");
const moviesRouter = express.Router();

//ROTTA INDEX
moviesRouter.get("/", (req, res) => {});

//ROTTA SHOW
moviesRouter.get("/:id", (req, res) => {});

module.exports = moviesRouter;
