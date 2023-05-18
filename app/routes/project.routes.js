module.exports = app => {
    const preguntas = require('../controllers/project.controller');

    app.post('/preguntas/crear', preguntas.create);
    app.get('/preguntas/:id_Encuesta', preguntas.findOne);
    app.get('/preguntas', preguntas.findPreguntas);
}