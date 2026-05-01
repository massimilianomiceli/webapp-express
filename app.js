const express = require("express");
const app = express();
const port = 3000;

const moviesRouter = require("./routers/movies");

app.use("/movies", moviesRouter);

app.listen(port, () => {
  console.log(`Connessione avvenuta con successo alla porta ${port}`);
});
