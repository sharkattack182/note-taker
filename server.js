// need to run requirements
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const path = require("paths");
const dbj = require("db.json");
const fs = require("fs");



//set up the server port
const app = express();
const PORT = process.env.PORT || 5501;

//parse data
app.use(express.json());
app.use(express.urlencoded({ extend: true}));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes)

//app.get functions/ send files
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
})

app.get("/api/notes", function(req, res) {
    res.json(dbj);
  });


  app.post("/api/notes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newNote = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newNote.id = Math.floor(Math.random() * 10000)
  
    console.log(newNote);
  
    dbj.push(newNote);
  
    res.json(newNote);

    fs.writeFile("db.json", JSON.stringify([dbj]), "utf-8", function(er) {
        if(er) throw er;
        console.log("successfully added note")
    })
  });
  

// start the server on the port (this was in the starting point instructor gave dourung office hours)
app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));