const bcrypt = require("bcrypt")

exports.hashPassword = async(password)=>{
    try {
        const hashedPassword =await bcrypt.hash(password,10);
        return hashedPassword;
    } catch (error) {
        console.log(error)
    }
}

exports.comparePassword = async(password,hashedPassword)=>{
    try {
        return bcrypt.compare(password,hashedPassword);
    } catch (error) {
        
    }
}