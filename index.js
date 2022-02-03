
const express = require("express");
const app = express();
const moongoose = require("mongoose")
const dotenv = require("dotenv");
const userRoute = require("./routes/user")

dotenv.config();

moongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DB Connection successefull!")).catch((err)=> {console.log("aqui o erro: " + err)});

app.get("/api/test", ()=>{
    console.log("test is successfull!")
});

app.use("/api/user", userRoute);




app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running!")
});