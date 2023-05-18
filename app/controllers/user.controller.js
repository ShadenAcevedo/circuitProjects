const Usuario = require("../models/user.model");


// =======================================
// Actualizar un usuario identificado por el usuarioId en la soliditud
// =======================================
// exports.update = (req, res) => {
//     // Validate Request
//     if (!req.body) {
//         res.status(400).send({
//             mensaje: "No lo puede dejar vacio!"
//         });
//     }

//     Usuario.updateById(
//         req.params.usuarioId,
//         new Usuario(req.body),
//         (err, usuarioGUardado) => {
//             if (err) {
//                 if (err.kind === "No_Encontrado") {
//                     return res.status(400).send({
//                         ok: false,
//                         mensaje: `Usuario no encontrado con el id: ${req.params.usuarioId}.`,
//                         errors: { message: 'No existe un usuario con ese Id' }
//                     });
//                 } else {
//                     return res.status(500).send({
//                         ok: false,
//                         message: "Error al retornar usuario con el id: " + req.params.usuarioId,
//                         errors: err
//                     });
//                 }
//             }

//             res.status(200).json({
//                 ok: true,
//                 usuario: usuarioGUardado
//             });

//         }
//     );
// };








// =======================================
// Eliminar un un usuario con usuarioId identificado en la solicitud
// =======================================
// exports.delete = (req, res) => {
//     Usuario.remove(req.params.usuarioId, (err, usuarioBorrado) => {
//         if (err) {
//             if (err.kind === "No_Encontrado") {
//                 return res.status(400).json({
//                     ok: false,
//                     mensaje: `Usuario no encontrado con id ${req.params.usuarioId}`,
//                     errors: { message: 'No existe un usuario con ese ID' }
//                 });
//             } else {
//                 return res.status(500).json({
//                     ok: false,
//                     mensaje: "Error al borrar usuario",
//                     errors: err
//                 });
//             }
//         } else {
//             res.status(200).json({
//                 ok: true,
//                 mensaje: `El usuario fue eliminado exitosamente`,
//             });
//         }
//     });
// };




// ==============================================
// Encuentra un solo usuario con un id de usuario
// ==============================================
exports.findOne = (req, res) => {
    Usuario.findById(req.params.usuarioId, (err, usuarioDb) => {
        if (err) {
            if (err.kind === "No_Encontrado") {
                return res.status(404).json({
                    ok: false,
                    mensaje: `Usuario no encontrado con id: ${req.params.usuarioId}.`,
                    errors: err
                });
            } else {
                return res.status(500).json({
                    ok: true,
                    mensaje: "Error al recuperar usuario con id: " + req.params.usuarioId,
                    errors: { message: "Error al recuperar usuario de la base de datos" }
                });
            }
        }
        usuarioDb.password = ":)";
        res.status(200).json({
            ok: true,
            usuario: usuarioDb
        });
    });
};




// ===============================================
// Eliminar todos los usuarios de la base de datos
// ===============================================
// exports.deleteAll = (req, res) => {
//     Usuario.removeAll((err, data) => {
//         if (err) {
//             return res.status(500).json({
//                 mensaje: err.mensaje || "Se produjo algun error al eliminar todos los usuarios"
//             });
//         } else {
//             res.send({
//                 ok: true,
//                 mensaje: `Todos las usuarios fueron eliminadas con éxito!`
//             });
//         }
//     });
// };




// ====================================== 
// Login
// ======================================