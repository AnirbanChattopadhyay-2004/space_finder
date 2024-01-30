import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import 'dotenv/config'; 
const app=express();
const port=3000;
const apikey=process.env.API_KEY;
app.use(express.static("public"))
app.get("/",(req,res)=>{
    res.render("index.ejs",{
        url:"images.png"
    })
})
app.use(bodyParser.urlencoded({extended:true}))
app.post("/apod",async (req,res)=>{
    const responseimg=await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apikey}&date=${req.body.date}`)
    res.render("index.ejs",{
        url:responseimg.data.url
    })
})
app.listen(port,()=>{
    console.log("Listening on port "+port)
})