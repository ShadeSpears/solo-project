const User = require("../models/user.model");

module.exports = {
    

    createNewUser: (req, res) => {
        User.create(req.body)
            .then((newUser) =>{
                console.log(newUser);
                res.json(newUser);
            })
            .catch((err) => {
                console.log("something went wrong in the createNewUser");
                res.status(400).json(err)
            })
    },

    findOneUser: (req,res) => {
        User.findOne({_id: req.params.id })
        .then((oneUser) => {
                console.log(oneUser)
                res.json(oneUser)
            })
            .catch((err) => {
                console.log("find One User failed");
                res.json({message: "something went wrong in findOneUser", error: err})
            })
    },

    deleteOneUser: (req, res) => {
        User.deleteOne({_id: req.params.id})
        .then((deletedUser) => {
            console.log(deletedUser);
            res.json(deletedUser);
            })
            .catch((err) => {
                console.log("delete One User Failed");
                res.json({message: "something went wrong in the deleteOneUser", error:err})
            })
    },

    updateUser: (req, res) => {
        User.findByIdAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
            .then((updateUser) => {
                console.log(updateUser)
                res.json(updateUser)
            })
            .catch((err) => {
                console.log("something went wrong in createNewUser");
                res.status(400).json(err)
            })

    }

}