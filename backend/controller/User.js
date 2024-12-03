const User = require("../Model/User")

exports.createUser = async(req,res)=>{
    try {
        const {name,email,phone,notes} = req.body

        console.log(req.body);
        
        

 // verify the datils
        if(!name || !email || !phone || !notes){
            return res.status(400).json({
                success:false,
                message : "please enter valid details"
            })
        }
   
    // check if user already exits
      const alreadyExist = await User.find({email:email})

      if(!alreadyExist){
        return res.status(400).json({
            success:false,
            message : "user already exits in database "
        })
      }

      const data = await User.create({
        name:name,
        email:email,
        phone:phone,
        notes:notes
      })


      return res.status(200).json({
        success:true,
        message:"user Created successfuly",
        data:data
      })



    // save in the database
    } catch (error) {
        res.status(500).json({
            success:false,
            message : "internal server error while creating the User"
        }) 
    }

}


exports.getAllUsers = async(req,res)=>{
   try {


     const allUsers = await User.find()
    if(!allUsers){
        return res.status(400).json({
            success:false,
            message : "unable to fetch Users"
        })
    }

    return res.status(200).json({
        success:true,
        message : "all User fetched Successfuly",
        data:allUsers
    })


   } catch (error) {
    res.status(500).json({
        success:false,
        message : "internal server error while fetching the user"
    }) 
    
   }
}



exports.searchUser = async(req,res)=>{

    try {
        const{searchQuery} = req.body

        const findUserByBio = await User.find({$text:{
            $search:`${searchQuery}`
        }})

        if(!findUserByBio){
            return res.status(400).json({
                success:false,
                message:"unable to find user"
            })
        }

        return res.status(200).json({
            success:true,
            message : "user search successfuly",
            data:findUserByBio
        })
        
    } catch (error) {
          console.log(error);
          return res.status(500).json({
            success:false,
            message:"error while searching the user"
          })
          
    }
   
 

}