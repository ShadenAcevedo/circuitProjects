const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

// =========================================================
// Autenticar
// =========================================================
module.exports.auth = async function auth(req, res) {

    // Validar solicitud
    if (!req.body) {
        return res.status(400).send({
            mensaje: "El contenido no puede estar vacio"
        });
    }

    const userDB = await User.getByEmail(req.body.emailUser)
    if (userDB === undefined) {
        // Crear un nuevo usuario
        const user = new User({
            emailUser: req.body.emailUser,
            passUser: bcrypt.hashSync(req.body.passUser, 10)
        });

        // Guardar usuario en la base de datos
        User.create(user, (err) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: "El correo debe ser único",
                    errors: err
                });
            } else {
                res.status(201).json({
                    ok: true,
                    usuario: user
                });
            }
        });
    } else {
        userDB.passUser = ":)";
        res.json({
            ok: true,
            usuario: userDB
        });
    }
}