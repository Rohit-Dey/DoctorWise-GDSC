const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    isDoctor: Boolean,
    email: {
        type: String,
        required: true
    }
})

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', userSchema);