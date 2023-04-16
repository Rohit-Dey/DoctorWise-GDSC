const mongoose = require('mongoose')
const Doctor = require('../models/Doctor')
const dbUrl = "mongodb+srv://rohitdey:vAj7wdRuC1j1iQ4H@cluster0.mvwhven.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dbUrl)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"))
db.once("open", () => {
    console.log("Database Connected")
})


const indianCities = ["Mumbai", "Delhi", "Kolkata", "Chennai", "Bangalore", "Hyderabad", "Pune", "Ahmedabad", "Jaipur"];
const indianNames = ["Aarav", "Aarya", "Aayush", "Aditi", "Akhil", "Amit", "Anika", "Anil", "Anjali", "Anupam"];
const people = [
    "Cardiologist",
    "Dermatologist" ,
     "Gastroenterologist",
    "Gynecologist",
    "Nephrologist",
    "Neurologist",
    "Oncologist",
    "Ophthalmologist",
    "Pathologist",
    "Psychiatrist",
    "Pulmonologist",
    "Radiologist",
    "Urologist",
];

const doctors = [];

for (let i = 0; i < 10; i++) {
    const doctor = {
        name: `Dr. ${indianNames[i]}`,
        age: Math.floor(Math.random() * 30) + 30, // generates random age between 30 and 60
        city: indianCities[Math.floor(Math.random() * indianCities.length)], // randomly assigns a city from the indianCities array
        specialty: `${people[Math.floor(Math.random() * 13)]}`, // sets specialty to "Cardiologist"
        experience: Math.floor(Math.random() * 20) + 5, // generates random experience between 5 and 25 years
        rating: Math.floor(Math.random() * 5) + 1, // generates random rating between 1 and 5
        workplace:"Gangaram Hospital",
        imageUrl:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    };
    doctors.push(doctor);
}

const seedDb = async() => {
    await Doctor.deleteMany({});
    for(let i = 0; i < 10; i++){
        const doc = new Doctor(doctors[i]);
        await doc.save();
    }
}

seedDb().then(() => {
    mongoose.connection.close();
});