
const express = require("express");
const path = require("path");
const fs = require("fs");
let array = [];



const app = express();
const PORT = process.env.PORT || 5501;

app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use(express.static("public"));


//app.get functions/ send files
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/public", "/index.html"));
})

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname + "/public", "/notes.html"));
})

app.get("/api/notes", function (req, res) {
    return res.json(JSON.parse(array));
});

fs.readFile(__dirname + "/db.json", "utf-8", function (er, data) {
    if (er) throw er;
    array.push(data)
})

app.post("/api/notes", function (req, res) {

    req.body.id = Math.floor(Math.random() * 10000);
    array = JSON.parse(array)
    array.push(req.body);
    array = JSON.stringify(array);

    fs.writeFile(__dirname + "/db.json", array, "utf-8", function (er) {
        if (er) throw er;
    })
    res.json(JSON.parse(array))
});

// app.delete("/api/notes/:id", function (req, res) {
    

// })

app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));