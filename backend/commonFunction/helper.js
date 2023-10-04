const User = require("../model/user")
const jwt=require("jsonwebtoken")


exports.tokenVerify=async(token)=>{
    console.log(token);
    try {
      const user=jwt.verify(token,process.env.JWT_SECREAT,(err,res)=>{
          if(err){
              return "token expire"
          }
          return res;
      })
      const userEmail=user.email
      if(user=="token expire"){
          return {status:"error",data:"token expire"}
      }
      const userInfo= await User.findOne({email:userEmail})
      if(userInfo){

       return {status:"ok",data:userInfo}
      }
      else{
          return {status:"error"}
      }
     } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}
