const express = require("express");
const app = express();
const port = 3000;

//IMPORT IL MIDDLEWARE PER LA GESTIONE DEGLI ERRORI
const errorsHandler = require("./middlewares/errorsHandler");
app.use(errorsHandler);

//IMPORTO IL ROUTER
const moviesRouter = require("./routers/movies");
app.use("/movies", moviesRouter);

app.listen(port, () => {
  console.log(`Connessione avvenuta con successo alla porta ${port}`);
});
