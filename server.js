const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const configRoutes = require("./server/routes");
const db = "mongodb://shreyas:Shreyas0393@ds263707.mlab.com:63707/passengerdemo";

//Init app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

mongoose.connect(db, { useNewUrlParser: true },function(error){
    if(error){
        console.log("Error connecting to database");
    }

    console.log("Successfully connected");
});

app.use(express.static(path.join(__dirname,"dist")));

configRoutes(app);

app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname,"dist/index.html"));
});

app.listen(3000, function(){
    console.log("Server running on port 3000...");
});

