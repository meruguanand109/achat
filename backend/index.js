const express=require("express")
const app=express()
const port= process.env.PORT || 5000 
const mongoDB=require("./db")
mongoDB()
app.use(express.json())
const cors = require('cors');
app.use(cors());

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","https://achat-three.vercel.app")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use("/api/",require("./Routes/CreateUser"))
app.use("/api/",require("./Routes/GlobalChat"))
