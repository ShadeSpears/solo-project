const chore = require('../models/chore.model')
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName: {
        type: String, 
        required: [true, "First name is required!"],
        maxlength: [25, "first name cant be over 25 characters"]
    },
    lastName: {
        type: String, 
        required: [true, "Last name is required!"],
        maxlength: [25, "last name cant be over 25 characters"]
    },
    email: {
        type: String,
        required: [true, "email is required!"],
        maxlength: [100, "email cant be over 100 characters"]
    },
    password: {
        type: String,
        required: [true, "password is required!"],
        maxlength: [30, "password is too long"]
    },
    confirmPassword: {
        type: String,
        required: [true, "password doesnt match!"],
        maxlength: [30, "password doesnt match"]
    },
    chores: {type: mongoose.Schema.Types.ObjectId, ref: 'Chore'}
}, {timestamps: true })

const User = mongoose.model("User", userSchema);

module.exports = User; 