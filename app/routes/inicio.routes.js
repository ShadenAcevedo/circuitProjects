module.exports = app => {

    app.route('/').get(function(req, res) {
        res.status(200).json({
            ok: true,
            mensaje: "Bienvenido a tu backend server con Mysql-Node.js"
        });
    });
}