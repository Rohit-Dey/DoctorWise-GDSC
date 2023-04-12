const express = require('express');
const mongoose = require('mongoose');
const router=require("./routes/router")
const dbUrl = 'mongodb+srv://rohitdey:vAj7wdRuC1j1iQ4H@cluster0.mvwhven.mongodb.net/?retryWrites=true&w=majority'
var bodyParser = require('body-parser')
const User = require('./models/User')




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

app.post("/register", async function (req, res) {
    const newUser = new User(req.body);
    await newUser.save();
    console.log(newUser);
    res.redirect('/')
});

app.listen(8000, () => {
    console.log('Serving On Port 4000')
})
