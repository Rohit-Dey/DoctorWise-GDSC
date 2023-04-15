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
    city:{
        type: String,
        required: true
    },
    specialty:{
        type: String,
        required: true
    },
    experience:{
        type: Number,
        required: true
    },
    workplace: String,
    rating: Number,
    imageUrl: String
})

module.exports = mongoose.model('Doctor', DoctorSchema);