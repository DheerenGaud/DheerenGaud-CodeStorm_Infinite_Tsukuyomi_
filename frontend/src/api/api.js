import axios from "axios"
const BACKEND_URL="http://localhost:9000"

export const AddUser= async(data)=>{
   try{
        return await axios.post(`${BACKEND_URL}/auth/singUp/`,data)
   }
   catch(err){
       console.log(err);
         console.log("error is occur in adding new acdemic year by api")
   }
}
export const LogINUser= async(data)=>{
   try{
        return await axios.post(`${BACKEND_URL}/auth/login-user/`,data)
   }
   catch(err){
       console.log(err);
         console.log("error is occur in adding new acdemic year by api")
   }
}