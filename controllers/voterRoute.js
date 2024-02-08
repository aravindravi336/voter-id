const express=require("express")
const { model, default: mongoose } = require("mongoose")
const router=express.Router()
const votermod=require("../models/voterModel")


router.post("/add",async(req,res)=>{
    let data=req.body
    let voter=new votermod(data)
    res.json({status:"Success"})
})











module.exports=router