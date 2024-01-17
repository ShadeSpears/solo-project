const UserController = require("../controller/user.controller");

module.exports = (app) => {

    app.post("/api/newUser", UserController.createNewUser);
    app.get("/api/User/:id", UserController.findOneUser);
    app.delete("/api/deleteUser/:id", UserController.deleteOneUser);
    app.put("/api/updateUser/:id", UserController.updateUser);
}