const jwt = require("jsonwebtoken")
const ApiError = require("../utils/ApiError.js")
const User = require("../models/user.model")

const registerUser = async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        //console.log("less fields")
        return res.status(403).json(
            {
                success: false,
                message: "Please fill all details"
            }
        )

    }

    const existingUser = await User.findOne({ email })
    if (existingUser)
        return res.status(400).json(
            {
                success: false,
                message: "User all ready exists"
            }
        )

    try {

        const user = await User.create({ name, email, password })

        res.status(201).json({
            success: true,
            message: "Successfull"
        })

    } catch (error) {
        res.status(500).json({ success: false })
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password)
        return res.status(403).json(
            {
                success: false,
                message: "Please fill all details"
            }
        )
    try {

        const user = await User.findOne({ email })

        if (!user)
            return res.status(403).json(
                {
                    success: false,
                    message: "Please Register At first"
                }
            )

        if (email == user.email && password != user.password) {
            return res.status(403).json(
                {
                    success: false,
                    message: "Invalid password"
                }
            )
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            {
                expiresIn: '2d'
            }
        )
        user.token = token
        user.password = undefined

        const options = {
            expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
            httpOnly: true
        }

        res.status(200).cookie("token", token, options).json({
            success: true,
            message: "Logged In Successfully",
            user, token
        })

    } catch (error) {
        return res.status(403).json(
            {
                success: false,
                message: "Invalid Credentials"
            }
        )
    }

   
}


const logout = async (req, res)=>{
    console.log()
    res.clearCookie('token',{
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        httpOnly: true
    })
}

module.exports = { registerUser, loginUser, logout }