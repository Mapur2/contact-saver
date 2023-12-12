const mongoose = require('mongoose');

const connectDB= async ()=>{
    try {
        const cI= await mongoose.connect(`${process.env.MONGO_URI}contactSaver`)
        console.log(cI.connection.host)
    } catch (error) {
        console.log("Mongo failure ", error)
    }
}

module.exports = connectDB