module.exports = app => {
    const project = require('../controllers/project.controller');

    app.post('/project/create', project.create);
    app.get('/projects/:idUser', project.findProjects);
}