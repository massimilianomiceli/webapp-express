//IMPORTO EXPRESS
const express = require("express");

const upload = require("../middlewares/multer");

const moviesRouter = express.Router();

//IMPORTO LE FUNZIONI DEL CONTROLLER
const moviesController = require("../controllers/moviesController");

//ROTTA INDEX
moviesRouter.get("/", moviesController.index);

//ROTTA SHOW
moviesRouter.get("/:id", moviesController.show);

//ROTTA STORE (MOVIE)
moviesRouter.post("/", upload.single("image"), moviesController.show);

//ROTTA STORE (RECENSIONI)
moviesRouter.post("/:id/reviews", moviesController.storeReview);

module.exports = moviesRouter;
