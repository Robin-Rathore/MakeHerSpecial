const jwt = require("jsonwebtoken")

exports.requireSignIn = async(req,res,next)=>{
    try {
        const decode = await jwt.verify(req.headers.authorization,process.env.SECRETKEY);
        req.user = decode;
        console.log(decode)
        next();
    } catch (error) {
        console.log(error);
    }
}