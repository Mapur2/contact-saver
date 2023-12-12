const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        default: null,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, { timestamps: true })




module.exports =
    mongoose.model("User", userSchema)
