const express = require('express');
const { registerUser,loginUser, logout } = require('../controllers/user');
const authentication = require('../middleware/authentication');
const { createContact,getAll } = require('../controllers/contacts.controller');
const router=express.Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.post("/createcontact",authentication,createContact)
router.get("/all",authentication,getAll)
router.get("/clear",logout)
module.exports = router