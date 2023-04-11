const express = require('express');
const mongoose = require('mongoose');
const router=require("./routes/router")
const dbUrl ='mongodb://localhost:27017/yelp-camp'
var bodyParser = require('body-parser')




mongoose.connect(dbUrl)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"))
db.once("open", () => {
    console.log("Database Connected")
})

const app = express();

app.use(express.urlencoded({ extended: true })) //to view req.body otherwise it is empty by default
app.use(bodyParser.urlencoded())
//app.use(router)

app.use(bodyParser.json())

app.post("/register", function (req, res) {
    console.log(req.body) // populated!
    res.send(200, req.body);
  });

app.listen(3000, () => {
    console.log('Serving On Port 4000')
})
