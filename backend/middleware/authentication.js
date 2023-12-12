const jwt = require("jsonwebtoken")
const ApiError = require("../utils/ApiError")
const User = require("../models/user.model")


const authentication = async (req, res, next) => {

    const { token } = req.cookies
        //console.log(token)
        if (!token) {
            res.status(403).json(
                {
                    success: false,
                    message: "Please Login"
                }
            )
        }

    try {

        const decode = jwt.verify(token, process.env.JWT_SECRET)
        //console.log(decode)
        //const id = decode.id
       // console.log(id);

        //const user1 = await User.findById(id)
        
        req.user = decode

        console.log(req.user)
        next()

    } catch (error) {
        res.status(403).json(
            {
                success: false,
                message: "Invalid"
            }
        )
    }

}

module.exports = authentication