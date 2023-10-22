import axios from 'axios'
import React, { useState } from 'react'
import "./Admin.css"


const Admin = () => {

const [data , setData] = useState({})
const [title , setTitle] = useState("")
const [img_url , setImg] = useState("")
const [category , setCategory] = useState("")
const [detail , setDetail] = useState("")
const [price , setPrice] = useState("")

 const handleformSubmit =(e)=>{
    e.preventDefault()

    setData({title,img_url ,category ,detail ,price  })
 
    
    postData(data)
  }



  const postData= async(data)=>{

  if(category==="men"){
    const res =   await axios.post("https://farfetch-backend.vercel.app/mens",data)      
    console.log("res" ,res.data)  
  }else if(category==="women"){
    const res =   await
 axios.post("https://farfetch-backend.vercel.app/mens",data)      
    console.log("res" ,res.data)  
  }

     
  }

  return (
   <>
   <h4>Admin pannel : Add new Product here</h4>

   <form onSubmit={handleformSubmit} className='form' action="">
    <input type="text" placeholder='Enter Title'  value={title}  onChange={(e)=>setTitle(e.target.value)} /> <br/>

    <input type="text" placeholder='Enter Image URL' value={img_url} onChange={(e)=>setImg(e.target.value) }/> <br/>
  
      <select onChange={(e)=>setCategory(e.target.value) } >
        <option value={""}>Select category</option>
        <option value={"men"}>Mens</option>
        <option value={"women"}>Womens</option>
        <option value={"kids"}>Kids</option>

      </select><br/>
   
    <input type="text" placeholder='Enter product detail' value={detail} onChange={(e)=>setDetail(e.target.value) } /> <br/>
    <input type="number" placeholder='Enter Price' value={price} onChange={(e)=>setPrice(e.target.value) } /> <br/>
  
      <input type="submit" />

   </form>
   <hr />
   </>
  )
}

export default Admin
