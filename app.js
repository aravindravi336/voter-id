const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const router=require("./controllers/voterRoute")


const app= express()


app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://aravind336:aravind336@cluster0.hsvdpyv.mongodb.net/voterDB?retryWrites=true&w=majority",
{useNewUrlParser:true})


app.use("/api/voter",router)


app.listen(3001,()=>{
    console.log("Server Running..")
})