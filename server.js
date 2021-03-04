//Require Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

//Initialize express app

const app = express();
const PORT = process.env.PORT || 3600;

// data parsing
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static(__dirname));//returns the absolute path

// Basic route that sends the user 

app.get("/",function(req,res){

})

// Setup listener

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})