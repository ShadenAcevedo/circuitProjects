const sql = require("./db");

// Constructor
const Usuario = function(user) {
    this.correo = user.emailUser;
    this.password = user.passUser;
}



Usuario.findById = (usuarioId, result) => {
    sql.query(`SELECT * FROM Usuario WHERE id = ${usuarioId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Usuario encontrado: ", res[0]);
            result(null, res[0]);
            return;
        }

        // usuario no encontrado con el id
        result({ kind: "No_Encontrado" }, null);
    });
};




// Usuario.getAll = result => {
//     sql.query("SELECT * FROM usuarios", (err, res) => {
//         if (err) {
//             console.log("Error", err);
//             result(null, err);
//             return;
//         }

//         console.log("Usuarios", res);
//         result(null, res);
//     });
// };


// Usuario.updateById = (id, usuario, result) => {
//     sql.query(
//         "UPDATE usuarios SET nombre = ?, correo = ?, password = ? WHERE id = ?", [usuario.nombre, usuario.correo, usuario.password, id],
//         (err, res) => {
//             if (err) {
//                 console.log("error: ", err);
//                 result(null, err);
//                 return;
//             }

//             if (res.affectedRows == 0) {
//                 // Usuario no encontrado con el id
//                 result({ kind: "No_Encontrado" }, null);
//                 return;
//             }

//             console.log("Usuario actualizado: ", { id: id, ...usuario });
//             result(null, { id: id, ...usuario });
//         }
//     );
// };





// Usuario.remove = (id, result) => {
//     sql.query("DELETE FROM usuarios WHERE id = ?", id, (err, res) => {
//         if (err) {
//             console.log("Error", err);
//             result(null, err);
//             return;
//         }

//         if (res.affectedRows == 0) {
//             // Usuario no encontrado con el id
//             result({ kind: "No_Encontrado" }, null);
//             return;
//         }

//         console.log("Usuario elimando con el id: ", id);
//         result(null, res);
//     });
// };



// Usuario.removeAll = result => {
//     sql.query("DELETE FROM usuarios", (err, res) => {
//         if (err) {
//             console.log("Error", err);
//             result(null, err);
//             return;
//         }

//         console.log(`Eliminados ${res.affectedRows} usuarios`);
//         result(null, res);
//     });
// };




module.exports = Usuario;