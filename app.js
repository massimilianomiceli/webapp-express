const express = require("express");
const app = express();

const port = process.env.PORT;

// IMPORTO IL ROUTER
const moviesRouter = require("./routers/movies");
app.use("/movies", moviesRouter);

// IMPORT IL MIDDLEWARE PER LA GESTIONE DEGLI ERRORI
const errorsHandler = require("./middlewares/errorsHandler");
app.use(errorsHandler);

app.listen(port, () => {
  console.log(`Connessione avvenuta con successo alla porta ${port}`);
});
