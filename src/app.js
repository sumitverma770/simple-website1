const express = require("express");
const hbs= require('hbs')
const app= express()
const mongoose= require("mongoose")
const routes= require('./routes/main')



app.use('/static',express.static('public'))
app.use('',routes)

//template engine

app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

//db connection
mongoose.connect("mongodb://localhost/website").then(()=>{
    console.log("db started")
})


app.listen(process.env.PORT| 5556, ()=>{
    console.log("server started");
});