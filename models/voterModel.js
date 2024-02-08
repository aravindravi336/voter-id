const mongoose=require("mongoose")
const voterSchema = new mongoose.Schema(
    {
        Id:String,
        name:String,
        age:String,
        Place:String,
        sex:String
    }
)






module.exports=mongoose.model("voter",voterSchema)