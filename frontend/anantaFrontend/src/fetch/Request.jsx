import axios from "axios";


export  const CreateUser = async(data)=>{
     try {
        console.log(data,"data");
        
         const user =  await axios.post("http://localhost:5000/api/v1/createUser",data)
         return user
     } catch (error) {
          console.log(error);
          return error
          
     }


} 

export  const ShowUser = async()=>{
     try {
    
         const data =  await axios.get("http://localhost:5000/api/v1/getAllUsers")
         return data
     } catch (error) {
          console.log(error);
          return error
          
     }


} 



