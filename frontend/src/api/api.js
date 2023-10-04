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

export const UserVarification= async(data)=>{
    let {userId,uniqueString}=data;
    console.log(userId);

    try{
        return await axios.get(`${BACKEND_URL}/auth/user/verify/${userId}/${uniqueString}`);
    }
    catch(err){
          console.log("error in finding user vertifivation  by api")
    }
}
export const addEvent= async(data)=>{
   

    try{
        return await axios.post(`${BACKEND_URL}/event/add-event`,data)
    }
    catch(err){
          console.log("error in finding user vertifivation  by api")
    }
}
export const GetAlleventdata= async(data)=>{
   

    try{
        return await axios.post(`${BACKEND_URL}/event/eventData`,data)
    }
    catch(err){
          console.log("error in finding user vertifivation  by api")
    }
}
