const Chore = require("../models/chore.model");

module.exports = {
    findAllChores: (req,res) => {
        Chore.find()
            .then((allChores) => {
                console.log(allChores);
                res.json(allChores)
            })
            .catch((err) => {
                console.log("findAllChores has failed!");
                res.json({ message: "something went wrong in findAll", error: err})
            })
    },

    createNewChore: (req, res) => {
        Chore.create(req.body)
            .then((newChore) =>{
                console.log(newChore);
                res.json(newChore);
            })
            .catch((err) => {
                console.log("something went wrong in the createNewChore");
                res.status(400).json(err)
            })
    },

    findOneChore: (req,res) => {
        Chore.findOne({_id: req.params.id })
        .then((oneChore) => {
                console.log(oneChore)
                res.json(oneChore)
            })
            .catch((err) => {
                console.log("find One Chore failed");
                res.json({message: "something went wrong in findOneChore", error: err})
            })
    },

    deleteOneChore: (req, res) => {
        Chore.deleteOne({_id: req.params.id})
        .then((deletedChore) => {
            console.log(deletedChore);
            res.json(deletedChore);
            })
            .catch((err) => {
                console.log("delete One Chore Failed");
                res.json({message: "something went wrong in the deleteOneChore", error:err})
            })
    },

    updateChore: (req, res) => {
        Chore.findByIdAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
            .then((updateChore) => {
                console.log(updateChore)
                res.json(updateChore)
            })
            .catch((err) => {
                console.log("something went wrong in createNewChore");
                res.status(400).json(err)
            })

    }

}