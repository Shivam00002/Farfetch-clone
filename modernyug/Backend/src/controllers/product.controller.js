const express = require("express")
const Product=require("../models/user.product")

const router = express.Router()

router.post("",async(req,res)=>{
    try{
     
        const product=await Product.create(req.body)
        return res.json({ status: 'ok', data: product})
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("",async(req,res)=>{
    try{
     
        const product=await Product.find().lean().exec()
      
        return res.send(product)
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})
module.exports=router
