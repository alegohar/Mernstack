import React from "react";
import { useState } from 'react'
import { Header } from "../Components/Header";
import swal from "sweetalert2"
function CustForm() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState("")
const [email,setEmail] = useState("")
const[message,setMessage]=useState("")
const [website,setWebsite]=useState("")
const newArr = [];
var a = 0;
const handleSubmit = (e)=>{
  e.preventDefault()
  swal.fire( 
  "form submitted",`name: ${name}, email: ${email}, websie: ${website}, message: ${message}`);
newArr.splice(a,4,{name},{email},{website},{message});
console.log(newArr);
a++;
}
  return (
    <>
    <center>
    <form onSubmit={handleSubmit} className='flex-col justify-center bg-purple-100'>
    <h1 className='font-extrabold text-5xl mt-3 italic bg-purple-700 text-white'>Contact Form</h1>
    <div>
      <input 
      onChange={(e)=>{
        setName(e.target.value);
        if(name === " ")
        {
          alert("Please Enter Correct Name");
        }
        if(!isNaN(name))
        {
          alert("Please Enter Characters");
        }

      }} 
      required
    
      type="text" className='h-10 border  mt-7 p-3' placeholder="Name" />
    </div>

    <div>
       
      <input
      onChange={(event)=>{
        setEmail(event.target.value)
      }} 
      required
      type="text" className='h-10 border  mt-7 p-3'placeholder="example123@gmail.com" />
    </div>

    <div>
      <input 
      required
      onChange={(e)=>{
        setWebsite(e.target.value)
      }}
      type="text" className='h-10 border  mt-7 p-3' placeholder='Website'/>
    </div>

    <div>
      <textarea 
      required
      onChange={(e)=>{
        setMessage(e.target.value)
      }}
      name="" id="" cols="30" rows="10" className='  border  mt-7 p-3 h-80 w-96' placeholder='Type Your Feedback'></textarea>
    </div>

    <button className='border mt-10 rounded-lg' type='Submit'>Submit</button>
    </form>
  
      </center>  
    </>
  )
}

export default CustForm
