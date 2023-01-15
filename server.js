
const path= require('path')
const { application } = require('express');
const express = require('express')
const hbs = require('hbs')
const server = express() 
require('dotenv').config()
// require('./js/jsMain.js')
const staticPath = path.join(__dirname)

server.set('view engine','hbs')
server.use(express.static(staticPath))

server.get('/',(req,res)=>{
    res.render('index.hbs')
})


server.get('/about',(req,res)=>{
    res.render('about.hbs')
})

server.get('/weather',(req,res)=>{
    res.render('weather.hbs')
})

server.all('*',(req,res)=>{
    res.render('error.hbs')
})

server.listen(process.env.PORT||5000,()=>{
    console.log(`Server is listening at port ${process.env.PORT}`);
})