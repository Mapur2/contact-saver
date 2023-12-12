const Contacts = require("../models/contacts.model");
const User = require("../models/user.model");

const createContact = async ( req, res)=>{
    const {name, nickname, number} =req.body
    const {id}=req.user
    if(!name || !number)
        return res.status(403).json(
            {
                success: false,
                message: "Please fill name and number"
            }
        )
    
    try {
        
       const contact = await Contacts.create({name, nickname, number, createdBy:id})
       console.log(name, nickname, number, id)
        res.json({
            success:true,
            contact})
    } catch (error) {
         res.status(500).json(
            {
                success: false,
                message: "Internal Error"
            }
        )
    }
}

const getAll = async (req,res)=>{
    try {
        
        const {id}=req.user

        const contacts = await Contacts.find({createdBy:id}) 
        console.log(contacts)
        res.status(200).json({
            success:true,
            contacts
        })

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Internal Error"
            }
        )
    }
}

module.exports = {createContact,getAll}