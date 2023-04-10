const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    specialty:{
        type: String,
        required: true
    },
    experience:{
        type: String,
        required: true
    },
    workplace: String,
    ratingSum: Number,
    peopleRated : Number
})

module.exports = mongoose.model('Doctor', DoctorSchema);