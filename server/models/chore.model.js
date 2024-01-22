
const mongoose = require("mongoose");

const ChoreSchema =  new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A chore title is required!"],
        minLength: [3, "title must be longer than 3 characters"],
        maxLength: [25, "the title's length cant be over 25 characters"]
    },
    description: {
        type: String,
        minLength: [10, "description must be longer than 10 characters"],
        required: [true, "must have a description for your chore"]
    }, 
    location: {
        type: String,
        minLength: [1, "Location must be longer than 1 character"],
        required: [true, "must have a location"],
    }, 
    
}, {timestamps: {createdAt: true } })

const Chore = mongoose.model("Chore", ChoreSchema);

module.exports = Chore;
