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
app.use(express.json())
app.use(bodyParser.json())

app.post("/register", async function (req, res) {
    const { name, email, password} = req.body;
    if (!name || !email || !password) {
        res.status(422).json({ error: "filll the all details" });
        console.log("Insufficient Details");
    };
    try {

        const preuser = await User.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This email is already exist" });
        } else {

            const finaluser = new User({
                name, email, password
            });

            const storedata = await finaluser.save();
            res.status(201).json(storedata);
        }

    } catch (error) {
        console.log("Error" + error.message);
        res.status(422).send(error);
    }
});

app.listen(8000, () => {
    console.log('Serving On Port 4000')
})
