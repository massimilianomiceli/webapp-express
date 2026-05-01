/*CREO UNA FUNZIONE PER LA GESTIONE DELGI ERRORI, QUESTA FUNZIONE VERRA RICHIAMATA
OGNI QUAL VOLTA CHE UN CONTROLLER GENERA UN ERRORE*/

function errorsHandler(err, req, res, next) {
  res.status(500);
  res.json({
    //RITORNIAMO L'ERRORE GENERATO DAL CONTROLLER
    error: err.message,
  });
}

module.exports = errorsHandler;
