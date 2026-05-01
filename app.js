const express = require("express");
const app = express();

const port = process.env.PORT;

// IMPORTO IL ROUTER
const moviesRouter = require("./routers/movies");

// IMPORT IL MIDDLEWARE PER LA GESTIONE DEGLI ERRORI
const errorsHandler = require("./middlewares/errorsHandler");

//IMPORT IL MIDDLEWARE PER LE ROTTE INSESISTENTI
const notFound = require("./middlewares/notFound");

app.use("/movies", moviesRouter);

app.use(errorsHandler);

app.use(notFound);

app.listen(port, () => {
  console.log(`Connessione avvenuta con successo alla porta ${port}`);
});
