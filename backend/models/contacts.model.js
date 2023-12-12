const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const contactSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        default: null,
    },
    nickname: {
        type: String,
    },
    number: {
        type: String,
        required: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})


module.exports =
    mongoose.model("Contact", contactSchema)
