const mongoose = require("mongoose")

require("dotenv").config()

exports.dbConnect = ()=>{
    try {
    mongoose.connect(process.env.DB_URL)
    console.log('database connected successfuly');
    
    } catch (error) {
         console.log(error,"error while connecting to the databse");
         
    }
}