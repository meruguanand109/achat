const mongoose=require("mongoose")

const mongoURI="mongodb+srv://anand:anand@cluster0.ibuvt.mongodb.net/achat?retryWrites=true&w=majority&appName=Cluster0"

const mongoDB=async()=>{
    try{
        await mongoose.connect(mongoURI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("******* db connected successfully ******")
    }catch(error){
        console.log(`db error : ${error}`)
    }
}

module.exports=mongoDB