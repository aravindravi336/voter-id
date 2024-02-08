const express=require("express")
const mongoose = require("mongoose")
const router=express.Router()
const votermod=require("../models/voterModel")


router.post("/add",async(req,res)=>{
    let data=req.body
    let voter=await new votermod(data)
    voter.save()
    res.json({status:"Success"})
})

router.get("/view",async(req,res)=>{
    let data=await votermod.find()
    res.json(data)
})









module.exports=router