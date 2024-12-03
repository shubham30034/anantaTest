const express = require("express")
const route = express.Router()


const {createUser,getAllUsers,searchUser} = require("../controller/User")



route.post("/createUser",createUser)
route.get("/getAllUsers",getAllUsers)
route.get("/searchUser",searchUser)



module.exports = route