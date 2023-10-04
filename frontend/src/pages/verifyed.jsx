import React from 'react';
import { useEffect, useState } from "react"
import {  useParams } from 'react-router-dom';
import {UserVarification} from "../api/api"
const EmailActivationSuccess = () => {

    const [data,setdata]=useState({
        data:"",
        status:""
      });
      useEffect(()=>{
          lodeFirst();
      },[])
      let { userId, uniqueString} = useParams();
      const lodeFirst = async()=>{
          const data=await UserVarification({userId,uniqueString})
          console.log(data.data)
          setdata(data.data)
      }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-green-500 mb-4">Email Activation Successful</h2>
        <p className="text-gray-700 mb-6">
          Your email has been successfully activated. You can now access your account.
        </p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green"
          onClick={() => {
            window.location.href="http://localhost:5173/signin"
          }}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default EmailActivationSuccess;