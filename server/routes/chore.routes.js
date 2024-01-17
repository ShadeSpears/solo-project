const ChoreController = require("../controller/chore.controller");

module.exports = (app) => {
    app.get("/api/Chores", ChoreController.findAllChores);
    app.post("/api/newChore", ChoreController.createNewChore);
    app.get("/api/Chores/:id", ChoreController.findOneChore);
    app.delete("/api/deleteChores/:id", ChoreController.deleteOneChore);
    app.put("/api/updateChore/:id", ChoreController.updateChore);
}