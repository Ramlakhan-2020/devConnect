const mongoose = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://ramlakhan2025:ramlakhan2025@cluster0.tfkxb.mongodb.net/userDetail");
}

module.exports ={
    connectDB
}

