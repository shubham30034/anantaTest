const express = require("express")
const app = express()
const cors = require("cors")

const {dbConnect} = require("./utils/dbConnect")
const route = require("./Routes/User")



app.use(cors())
app.use(express.json())
app.use("/api/v1",route)




dbConnect()





const PORT = 5000

app.listen(PORT,()=>{
    console.log(`server started successfuly at port${PORT}`);
    
})