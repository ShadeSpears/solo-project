
const mongoose = require("mongoose");

const ChoreSchema =  new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A chore title is required!"],
        maxlength: [25, "the title's length cant be over 25 characters"]
    },
    description: {
        type: String,
        required: [true, "must have a description for your chore"]
    },
    location: {
        type: String,
        required: [true, "must have a location"],
    }, 
    
}, {timestamps: {createdAt: true } })

const Chore = mongoose.model("Chore", ChoreSchema);

module.exports = Chore;
