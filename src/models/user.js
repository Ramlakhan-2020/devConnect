const mongoose = require("mongoose");

const {Schema} = mongoose;
const userSchema =  new Schema({
    firstName: String,
    lastName: String,
    emailId: String,
    password: String,
    Age: Number,
    Gender: String

})

const userModel = new mongoose.model("devConnect",userSchema,"devConnect");
module.exports ={
    userModel
}