const express= require("express");

// const {adminAuth}=  require('./middleware/auth');
const {connectDB} = require("./config/database");
const { userModel } = require("./models/user");

const app= express();
// it use to convert json data to javascript object so that our code can read it.It also consider as a middleware of it
app.use(express.json());

app.post('/user',async (req,res)=>{
    const userBody =  req.body;
    console.log("userBody",userBody);
    const user= new userModel(userBody);
    await user.save();
    res.send("data saved");

})

app.get('/user', async (req,res)=>{
    const userId = req.body.emailId;
    try{
        const user = await userModel.find({emailId: userId});
        console.log(user);
        if(user.length===0){
            res.status(400).send('no user found', err.message);
        }
        else{
            res.send(user);
        }
            
    }
    catch(err) {
        res.status(400).send('no user found', err.message);
    }
    
    
})

connectDB().then(()=>{
    console.log('database connecttion succesful');
    app.listen('3000',()=>{
        console.log('server is succesfull');
    });
}).catch((err)=>{
    console.log('database is noooot working',err);
})

