// need to run requirements
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const path = require("paths");



//set up the server port
const app = express();
const PORT = process.env.PORT || 3000;

//parse data
app.use(express.json());
app.use(express.urlencoded({ extend: true}));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes)

//app.get functions/ send files
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
})

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/notes.html"));
})

app.get("/index.js", function(req, res) {
    res.sendFile(path.join(__dirname, "/assets/js/index.js"));
})
//display notes

// start the server on the port (this was in the starting point instructor gave dourung office hours)
app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));