const Pregunta = require('../models/project.model');

exports.create = (req, res) => {
    var body = req.body;

    //Validar solicitud
    if (!body) {
        return res.status(400).send({
            mensaje: "El contenido no puede estar vacio"
        });
    }


    // Crear una nueva encuesta
    const pregunta = new Pregunta({
        pregunta: body.pregunta,
        tipo: body.tipo,
        Encuesta_id_Encuesta: body.id_Encuesta
    })


    // Guardar pregunta en la base de datos
    Pregunta.create(pregunta, (err, data) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: "El id de la encuesta no existe",
                errors: err
            });
        } else {
            res.status(201).json({
                ok: true,
                pregunta: pregunta
            });
        }
    });


}





exports.findOne = (req, res) => {
    const id_Encuesta = req.params.id_Encuesta;
    Pregunta.finByIdEncuesta(id_Encuesta, (err, response) => {
        if (err) {
            if (err.kind === 'No_Encontrado') {
                return res.status(404).json({
                    ok: false,
                    mensaje: `preguntas no encontradas con el id de esa encuesta: ${id_Encuesta}.`,
                    errors: err
                });
            } else {
                return res.status(500).json({
                    ok: false,
                    mensaje: "Error al retornar preguntas con el id_Encuesta con el id" + id_Encuesta,
                    errors: { message: 'Error al recuperar preguntas de la base de datos' }
                });
            }
        }
        res.status(200).json(Object.assign({ ok: true, response }));
    });
}

exports.findPreguntas = (req, res) => {
    Pregunta.findPregunta((err, preguntas) => {
        if (err) {
            if (err.kind === 'No_Encontrado') {
                return res.status(404).json({
                    ok: false,
                    mensaje: `preguntas no encontradas.`,
                    errors: err
                });
            } else {
                return res.status(500).json({
                    ok: false,
                    mensaje: "Error al retornar preguntas",
                    errors: { message: 'Error al recuperar preguntas de la base de datos' }
                });
            }
        }
        res.status(200).json(Object.assign({ ok: true, preguntas }));
    });
}