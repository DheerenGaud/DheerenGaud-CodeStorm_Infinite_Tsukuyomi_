import { useState } from "react"
import {AddUser} from "../api/api"

export default function SignUpForm(props){
      const [data,setData]= useState({
        name:"",
        email:"",
        phoneNumber:"",
        password:"",
        userType:"",
        companyName:"",
        companyAddress:"",
        domain:"",
      })
const handleChange =(e)=>{
    // console.log(e.target.value);
     setData({...data,[e.target.name]:e.target.value})
}
const handlClick = async(e)=>{
    e.preventDefault()
    try {
        const x= await AddUser(data);
        console.log(x.data);
        if(x.data.status==="Pending"){
            alert(x.data.data)
            window.location.href="./signin"
        }
        else{
            alert(x.data.data)
        }
    } catch (error) {
        
    }
}


    return(
        <>
            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                        eaque error neque ipsa culpa autem, at itaque nostrum!
                    </p>
                </div>

                <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div className="[&>*]:py-2">
                        <div>
                            <label
                                htmlFor="Username"
                                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                onChange={handleChange}
                                    type="text"
                                    id="Username"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent w-full focus:outline-none focus:ring-0 px-4 py-2"
                                    placeholder="Username"
                                    name="name"
                                    
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Username
                                </span>
                                
                            </label>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <label
                                    htmlFor="Email"
                                    className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                >
                                    <input
                                                                  
                                      onChange={handleChange}

                                        type="email"
                                        id="Email"
                                        name="email"
                                        className="peer border-none bg-transparent placeholder-transparent focus:border-transparent w-full focus:outline-none focus:ring-0 px-4 py-2"
                                        placeholder="Email"
                                        
                                    />

                                    <span
                                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                    >
                                        Email
                                    </span>
                                    
                                </label>
                            </div>
                            <div>
                                <label
                                    htmlFor="Phone"
                                    className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                >
                                    <input
                                       onChange={handleChange}
                                        type="number"
                                        id="Username"
                                        name="phoneNumber"
                                        className="peer border-none bg-transparent placeholder-transparent focus:border-transparent w-full focus:outline-none focus:ring-0 px-4 py-2"
                                        placeholder="Username"
                                        
                                    />

                                    <span
                                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                    >
                                        Phone Number
                                    </span>
                                    
                                </label>
                            </div>
                            
                        </div>
                        <div>
                            

                            <select
                             onChange={handleChange}
                                name="userType"
                                id="Roles"
                                className="mt-1.5 w-full rounded-lg text-gray-700 sm:text-sm p-4 border-[#e5e7eb] border-solid border-2 bg-white"
                            >
                                <option value="">Please select</option>
                                <option value="admin">Admin</option>
                                <option value="client">Client</option>
                                <option value="vendor">Vendor</option>
                            </select>
                        </div>
                        {
  data.userType === "vendor" ? (
    <div>
                            

                            <select
                             onChange={handleChange}
                                name="domain"
                                id="Roles"
                                className="mt-1.5 w-full rounded-lg text-gray-700 sm:text-sm p-4 border-[#e5e7eb] border-solid border-2 bg-white"
                            >
                                <option value="">Please select Domain</option>
                                <option value="food">Food</option>
                                <option value="music">Music</option>
                                <option value="entertainment">Entertainment</option>
                            </select>
    </div>
  ) : null // This will render nothing if userType is not "vendor"
}
                        <div>
                            <label
                                htmlFor="CompanyName"
                                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                 onChange={handleChange}

                                    type="password"
                                    id="CompanyName"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent w-full focus:outline-none focus:ring-0 px-4 py-2"
                                    placeholder="CompanyName"
                                    name="password"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                   Password
                                </span>
                                
                            </label>
                        </div>
                        <div>
                            <label
                                htmlFor="CompanyName"
                                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                 onChange={handleChange}

                                    type="password"
                                    id="CompanyName"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent w-full focus:outline-none focus:ring-0 px-4 py-2"
                                    placeholder="CompanyName"
                                    name="cpassword"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                   Confirm Password
                                </span>
                                
                            </label>
                        </div>
                        <div>
                            <label
                                htmlFor="CompanyName"
                                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                 onChange={handleChange}

                                    type="text"
                                    id="CompanyName"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent w-full focus:outline-none focus:ring-0 px-4 py-2"
                                    placeholder="CompanyName"
                                    name="companyName"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Company Name
                                </span>
                                
                            </label>
                        </div>


                       
                        <div>
                            <label
                                htmlFor="CompanyAddress"
                                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <textarea
                                 onChange={handleChange}

                                    name="companyAddress"
                                    id="CompanyAddress"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 px-4 py-2 w-full h-12"
                                    placeholder="CompanyAddress"
                                    
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Company Address
                                </span>
                                
                            </label>
                        </div>
                        <button onClick={handlClick}>submit</button>
                    </div>


                </form>
            </div>

            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <img
                alt="Welcome"
                src="/sign-up.svg"
                className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
            </section>
        </>
    )
}