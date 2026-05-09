//CONNESSIONE AL DATABASE
const connection = require("../data/db_movies");

function index(req, res) {
  const sql = "SELECT * from movies";

  connection.query(sql, (err, results) => {
    if (err)
      return res.status(500).json({ error: "Query al database fallita" });

    const movies = results.map((movie) => {
      return {
        ...movie,
        image: req.imagePath + movie.image,
      };
    });
    res.json(movies);
  });
}

function show(req, res) {
  const { id } = req.params;
  const moviesSql = "SELECT * FROM movies WHERE id=?";
  const reviewsSql =
    "SELECT R.* FROM reviews AS R INNER JOIN movies AS M ON R.movie_id = M.id WHERE M.id=?";

  connection.query(moviesSql, [id], (err, moviesResults) => {
    if (err)
      return res.status(500).json({ error: "Query al database fallita" });
    if (moviesResults.length === 0)
      return res.status(404).json({ error: "film non trovato" });

    const movie = moviesResults[0];
    movie.image = req.imagePath + movie.image;

    connection.query(reviewsSql, [id], (err, reviewsResults) => {
      if (err)
        return res.status(500).json({ error: "Query al database fallita" });
      movie.reviews = reviewsResults;
      res.json(movie);
    });
  });
}

function store(req, res) {
  const { title, director, genre, release_year, abstract } = req.body;
  const imageName = `${req.file.filename}`;
  const sql =
    "INSERT INTO movies (title, director, genre, release_year, abstract, image) VALUES (?, ?, ?, ?, ?, ?)";

  connection.query(
    sql,
    [title, director, genre, release_year, abstract, imageName],
    (err, result) => {
      if (err) {
        console.log(err);
        return next(new Error("Errore interno del server"));
      }
      res.status(201).json({
        status: "success",
        message: "Film caricato con successo",
      });
    },
  );
}

function storeReview(req, res) {
  const { id } = req.params;
  const { name, text, vote } = req.body;
  const sql =
    "INSERT INTO reviews (name, text, vote, movie_id) VALUES (?, ?, ?, ?)";

  connection.query(sql, [name, text, vote, id], (err, result) => {
    if (err)
      return res.status(500).json({ error: "Query al database fallita" });
    res.status(201);
    res.json({
      message: "Recensione aggiunta con successo",
      id: result.insertId,
    });
  });
}

module.exports = { index, show, store, storeReview };
