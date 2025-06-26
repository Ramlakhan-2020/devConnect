const express= require("express");

const {adminAuth}=  require('./middleware/auth');

const app= express();

// middleware concept comes into picture
app.use('/admin', adminAuth)


app.get('/admin/userDetail',(req,res)=>{
    res.send('userdetail')
})

app.get('/admin/userAccount',(req,res)=>{
    res.send("userAccount");
})


app.listen('3000',()=>{
    console.log('server is succesfull');
});