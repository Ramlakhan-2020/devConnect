

const adminAuth= (req,res,next)=>{
    const token = "xyz";
    const auth=  token === 'xyz';
    if(auth){
        next();
    }
    else{
        res.status(401).send('please take access first')
    }
}

module.exports= {
    adminAuth
}