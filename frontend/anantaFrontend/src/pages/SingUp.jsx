import React from 'react'
import { useState } from 'react'
import { CreateUser } from '../fetch/Request'

const SingUp = () => {

   const [name,setName] = useState("") 
   const [email,setEmail] = useState("") 
   const [phone,setPhone] = useState() 
   const [notes,setNotes] = useState("") 

    const sendUserData = async(e)=>{
        e.preventDefault()

    const data = {
    name:name,
    email:email,
    phone:phone,
    notes:notes
     }

     const response =  await CreateUser({
        name:name,
        email:email,
        phone:phone,
        notes:notes
         }
    )
     console.log(response);
     
    }



  return (
    <div>
        <form>
            <div>
        <label>name</label>
       <input type="text"  name='name' className=' p-2 m-2  bg-gray-100'
         onChange={(e)=> setName(e.target.value)}
       />
       </div>
       <div>
       <label htmlFor="">email</label>
       <input type="email"  name='email' className=' p-2 m-2  bg-gray-100'
         onChange={(e)=> setEmail(e.target.value)}
       />
       </div>
       <div>
       <label htmlFor="">phone number</label>
       <input type="number" className=' p-2 m-2  bg-gray-100'  name='number'
         onChange={(e)=> setPhone(e.target.value)}
       />
       </div>
       <div>
       <label htmlFor=""> notes</label>
       <input type="notes" className=' p-2 m-2  bg-gray-100'  name='notes'
        onChange={(e)=> setNotes(e.target.value)}
       />
       </div>
       <button
        onClick={(e)=> sendUserData(e)}
       className=' m-2 p-2 bg-green-400 hover:bg-green-600 rounded'>Submit</button>

        </form>
    </div>
  )
}

export default SingUp