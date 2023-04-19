const express = require('express');
require("dotenv").config()
const mongoose = require('mongoose');
const dbUrl = process.env.dbURL
const User = require('./models/User')
const cors=require("cors")
const bcrypt = require("bcryptjs");
const Doctor=require("./models/Doctor")
const cookieParser = require("cookie-parser");
const authenticate=require("./middleware/authenticate")

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
app.use(cors({
    origin: ['https://doctorwise-2z8v.onrender.com', 'http://34.131.156.208:3000'],
    credentials:true,
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
}))
//app.use(bodyParser.urlencoded())
//app.use(router)

//app.use(bodyParser.json())
app.get("/doctor", async(req, res) => {
    try{
        const doctors = await Doctor.find({});
        console.log(doctors);
        res.status(200).json(doctors);
    }
    catch(e){
        console.log(e)
    }
})

app.get("/validuser", authenticate, async (req, res) => {
    try {
        const validuserone = await User.findOne({ _id: req.userID });
        console.log(validuserone + "user hain home k header main pr");
        res.status(201).json(validuserone);
    } catch (error) {
        console.log(error + "error for valid user");
    }
});
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
app.get("/logout", authenticate, async (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
            return curelem.token !== req.token
        });

        res.clearCookie("doctorwise", { path: "/" });
        req.rootUser.save();
        res.status(201).json(req.rootUser.tokens);
        console.log("user logout");

    } catch (error) {
        console.log(error + "jwt provide then logout");
    }
});
app.get("/sdetails", async (req, res) => {
    try {
        const {search}=req.params;
        const validdoctors = await User.find({},{ specialty: search });
        let arr=[]
        validdoctors.forEach(doc=>{
            arr.push(doc)
        })
        

        res.status(201).json(doc);
    } catch (error) {
        console.log(error + " :finding doctors");
    }
});
app.listen(8000, () => {
    console.log('Serving On Port 8000')
})
