const sql = require("./db");

// Constructor
const User = function(user) {
    this.emailUser = user.emailUser;
    this.passUser = user.passUser;
}

User.create = (usuarioNuevo, result) => {
    sql.query("INSERT INTO user SET ?", usuarioNuevo, (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null);
            return;
        }
        console.log("Usuario creado: ", { idUser: res.insertId, ...usuarioNuevo });
        result(null, { idUser: res.insertId, ...usuarioNuevo });
    });
};

User.getByEmail = (emailUser) => {
    return new Promise((resolve, reject) => {
        sql.query("SELECT * FROM user WHERE emailUser = ?", emailUser, (err, rows) => {
            if (err) reject(err)
            resolve(rows[0])
        });
    });
}


module.exports = User;