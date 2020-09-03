// need to run requirements
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const path = require("paths");
const dbj = require("db.json")



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
//display notes

// start the server on the port (this was in the starting point instructor gave dourung office hours)
app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));