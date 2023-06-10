const express = require('express');
const app = express(); 
const pro_list = require("./products") 
const mongoose = require('mongoose')
const cors = require('cors')
const content = require('./schema')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

mongoose.connect("mongodb+srv://mahesh:mahesh12@cluster0.9g80yjd.mongodb.net/firstdb?retryWrites=true&w=majority")
.then(()=> { console.log("mongodb connected suceesfully") })
.catch((err)=>{ console.log(err) })

app.get("/",(req,res)=> { res.send("server started now") })

app.post("/add",(req,res)=>{
    console.log(req.body)
    const {name,passcode} = req.body
    const newData = new content({name,passcode})
    newData.save()
    res.send("Data Added")

})

app.get("/retrieve",(req,res)=>{ content.find() 
.then(found => res.json(found) )})

app.get("/pro",(req,res)=> { res.json(pro_list) })

app.get("/about",(req,res)=> { res.send("IT Solutions") })

app.listen(4000 , () => console.log("Server Started"))
// console.log("Good Afternoon")