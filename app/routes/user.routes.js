module.exports = app => {
    const user = require("../controllers/user.controller");

    // Login
    app.post("/auth", user.auth);
};