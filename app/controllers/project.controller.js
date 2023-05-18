const Project = require('../models/project.model');

exports.create = (req, res) => {
    var body = req.body;

    //Validar solicitud
    if (!body) {
        return res.status(400).send({
            mensaje: "El contenido no puede estar vacio"
        });
    }

    // Crear un nuevo proyecto
    const project = new Project({
        nameProject: body.nameProject,
        fileProject: body.fileProject,
        estado: body.estado
    })

    // Guardar proyecto en la base de datos
    Project.create(project, (err) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: "El id del proyecto no existe",
                errors: err
            });
        } else {
            res.status(201).json({
                ok: true,
                project: project
            });
        }
    });
}

exports.findProjects = (req, res) => {
    Project.findProjects((err, projects) => {
        if (err) {
            if (err.kind === 'No_Encontrado') {
                return res.status(404).json({
                    ok: false,
                    mensaje: `proyectos no encontrados.`,
                    errors: err
                });
            } else {
                return res.status(500).json({
                    ok: false,
                    mensaje: "Error al retornar proyectos",
                    errors: { message: 'Error al recuperar proyectos de la base de datos' }
                });
            }
        }
        res.status(200).json(Object.assign({ ok: true, projects }));
    });
}