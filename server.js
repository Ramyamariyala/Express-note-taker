//Require Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');
const data = require("./db/db.json");

//Initialize express app

const app = express();
const PORT = process.env.PORT || 3600;

// data parsing
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static("public"));//returns the absolute path

// Basic route that sends the user 
app.get("/notes",(req,res) => {
    res.sendFile(path.join(__dirname,"./public/notes.html"));
});

// Api routes
app.get("/api/notes",(req, res) => {
    res.sendFile(path.join(__dirname,"./db/db.json"));
});

//post route

app.post("/api/notes",(req,res) => {
    let newNote = req.body;
    fs.readFile("./db/db.json",function(err,data){
        if (err) {
            throw err;
        } else {
            let notes = JSON.parse(data);
            notes.push(newNote);
            notes.forEach((item, i) => {
                item.id = i+1;
            });
            fs.writeFile("./db/db.json",JSON.stringify(notes),function(err){
                if(err) throw err;
                res.json(newNote);
            });
        }
    });
});

app.delete("/api/notes/:id",(req, res) => {
    let deleteId = req.params.id;
    fs.readFile("./db/db.json",function (err, data){
        if(err) {
            throw err;
        } else {
            let notes = JSON.parse(data);
            notes.forEach((note) => {
                if(deleteId == note.id) {
                    let currentIndex = notes.indexOf(note);
                    notes.splice(currentIndex, 1);
                    fs.writeFile("./db/db.json",JSON.stringify(notes), function(err){
                        if (err) throw err;
                        res.json(notes);
                    });
                }
            });
        }
    });
});

app.get("*",(req, res) => {
    res.sendFile(path.join(__dirname,"./public/index.html"));
});
//  Setup listener

app.listen(PORT, () => console.log(`App listening on location ${PORT}`));