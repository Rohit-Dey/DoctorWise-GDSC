const express = require('express');
require("dotenv").config()
const mongoose = require('mongoose');
const router=require("./routes/router")
const dbUrl = process.env.dbURL
var bodyParser = require('body-parser')
const User = require('./models/User')
const cors=require("cors")
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");

mongoose.connect(dbUrl)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"))
db.once("open", () => {
    console.log("Database Connected")
})

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true })) //to view req.body otherwise it is empty by default
app.use(cookieParser(""));
app.use(cors())
//app.use(bodyParser.urlencoded())
//app.use(router)

//app.use(bodyParser.json())
app.post("/login", async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "fill the details" });
    };

    try {

        const userlogin = await User.findOne({ email: email });
        console.log(userlogin);
        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            console.log(isMatch);



            if (!isMatch) {
                res.status(400).json({ error: "invalid crediential pass" });
            } else {
                
                const token = await userlogin.generatAuthtoken();
                console.log(token);

                res.cookie("doctorwise", token, {
                    expires: new Date(Date.now() + 2589000),
                    httpOnly: true
                });
               res.status(201).json(userlogin);
            }

        } else {
            res.status(400).json({ error: "user not exist" });
        }

    } catch (error) {
        res.status(400).json({ error: "invalid crediential pass" });
        console.log("error the bhai catch ma for login time" + error.message);
    }
});

app.post("/register", async function (req, res) {
    const { name, username, email, password} = req.body;
    if (!name || !username || !email || !password) {
        res.status(422).json({ error: "filll the all details" });
        console.log("Insufficient Details");
    };
    try {

        const preuser = await User.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This email is already exist" });
        } else {

            const finaluser = new User({
                name, username, email, password
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
    console.log('Serving On Port 8000')
})
