const express = require("express");
const app = express();

const port = process.env.PORT;

//GESTIONE DEGLI ASSET STATICI
app.use(express.static("public"));

//ABILITO CORS
const cors = require("cors");

//ABILITO IL DOMINIO DEL FE
app.use(
  cors({
    origin: process.env.FE_APP,
  }),
);

// IMPORTO IL ROUTER
const moviesRouter = require("./routers/movies");

// IMPORT IL MIDDLEWARE PER LA GESTIONE DEGLI ERRORI
const errorsHandler = require("./middlewares/errorsHandler");

//IMPORT IL MIDDLEWARE PER LE ROTTE INSESISTENTI
const notFound = require("./middlewares/notFound");

app.use("/api/movies/", moviesRouter);

app.use(errorsHandler);

app.use(notFound);

app.listen(port, () => {
  console.log(`Connessione avvenuta con successo alla porta ${port}`);
});
