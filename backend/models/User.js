const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const keysecret = process.env.KEY
const jwt = require("jsonwebtoken");
const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
    
})
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
        
    }
    next();
});
userSchema.methods.generatAuthtoken = async function(){
    try {
        let token = jwt.sign({ _id:this._id},keysecret,{
            expiresIn:"1d"
        });
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;

    } catch (error) {
        console.log(error);
    }
}

module.exports = mongoose.model('User', userSchema);
