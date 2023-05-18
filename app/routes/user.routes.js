module.exports = app => {
    const user = require("../controllers/user.controller");

    // Login
    app.post("/login", user.auth);
};