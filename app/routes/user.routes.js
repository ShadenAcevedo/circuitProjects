module.exports = app => {
    const usuarios = require("../controllers/user.controller");

    // Recuperar un usuario con id
    app.get("/usuarios/:usuarioId", usuarios.findOne);

    // Enviar correo electronico
    // app.post('/email', usuarios.sendEmail);



    // Recuperar todos los usuarios
    // app.get("/usuarios", usuarios.findAll);



    // Actualiza un usuario con id
    // app.put("/usuarios/:usuarioId", usuarios.update);

    // Elimina un usuario con id
    // app.delete("/usuarios/:usuarioId", usuarios.delete);

    // Elimina todos los usuarios de la base de datos
    // app.delete("/usuarios", usuarios.deleteAll);


};