const sql = require('./db');

// Constructor
const Project = function(project) {
    this.nameProject = project.nameProject;
    this.fileProject = project.fileProject;
    this.estado = project.estado;
}

Project.create = (proyectoNuevo, result) => {
    sql.query('INSERT INTO project SET ?', proyectoNuevo, (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null);
            return;
        }
        console.log("Proyecto creado: ", { idProject: res.insertId, ...proyectoNuevo });
        result(null, { idProject: res.insertId, ...proyectoNuevo });
    });
}

Project.findProjects = (result) => {
    sql.query("SELECT * FROM project", (err, res) => {
        if (err) {
            console.log('Error', err);
            result(null, err);
            return;
        }
        if (res.length) {
            console.log('Proyectos encontrados', res);
            result(null, res);
            return;
        }
        result({ kind: 'No_Encontrado' }, null);
    });
}

module.exports = Project;