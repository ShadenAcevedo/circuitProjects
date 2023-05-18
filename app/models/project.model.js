const sql = require('./db');


// Constructor
const Pregunta = function(project) {
    this.pregunta = project.nameProject;
    this.id_Encuesta = project.idUser;
}


Pregunta.create = (preguntaNueva, result) => {
    sql.query('INSERT INTO Pregunta SET ?', preguntaNueva, (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null);
            return;
        }
        console.log("Pregunta creada: ", { id_Pregunta: res.insertId, ...preguntaNueva });
        result(null, { id_Pregunta: res.insertId, ...preguntaNueva });
    });
}


Pregunta.finByIdEncuesta = (id_Encuesta, result) => {
    sql.query("SELECT * FROM Pregunta  WHERE id_Encuesta = ?", [id_Encuesta], (err, res) => {
        if (err) {
            console.log('Error', err);
            result(null, err);
            return;
        }
        if (res.length) {
            console.log('Preguntas encontradas', res);
            result(null, res);
            return;
        }
        // Encuesta no encontrada con el id
        result({ kind: 'No_Encontrado' }, null);
    });
}


Pregunta.findPregunta = (result) => {
    sql.query("SELECT * FROM Pregunta", (err, res) => {
        if (err) {
            console.log('Error', err);
            result(null, err);
            return;
        }
        if (res.length) {
            console.log('Preguntas encontradas', res);
            result(null, res);
            return;
        }
        result({ kind: 'No_Encontrado' }, null);
    });
}


module.exports = Pregunta;