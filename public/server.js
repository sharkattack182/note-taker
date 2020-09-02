// need to run requirements
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");


//set up the server port
const app = express();
const PORT = pricess.env.PORT || 3000;

//parse data
app.use(express.json());
app.use(express.urlencoded({ extend: true}));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes)

//app.get functions/ send files

//display notes

// start the server on the port (this was in the starting point instructor gave dourung office hours)
app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));