//CONNESSIONE AL DATABASE
const connection = require("../data/db_movies");

function index(req, res) {
  const sql = "SELECT * from movies";

  connection.query(sql, (err, results) => {
    if (err)
      return res.status(500).json({ error: "Query al database fallita" });
    res.json(results);
  });
}

function show(req, res) {}

module.exports = { index, show };
