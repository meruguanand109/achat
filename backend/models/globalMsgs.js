const mongoose=require("mongoose")

const {Schema}=mongoose 

const GlobalMsgsSchema=new Schema({
    name:{type:String,require:true},
    message:{type:String,require:true},
    email:{type:String,require:true},
    date:{type:Date,default:Date.now}
})

module.exports=mongoose.model("Global",GlobalMsgsSchema)