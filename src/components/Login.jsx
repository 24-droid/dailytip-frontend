import React from 'react'
import { PasswordInput } from "./ui/password-input";
const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="flex flex-col items-center justify-center w-120 bg-amber-200 m-auto rounded-lg border-amber-600 border-r-2">
      <p className="font-[40%] text-center text-4xl mb-4">Login</p>
      <form className="flex flex-col gap-4 w-[80%] ">
        <div>
          <label htmlFor="email" className="pl-4">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full h-12 bg-white border border-black rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent"
            placeholder="abc@example.com"
          />
        </div>
       
        <div>
          <label htmlFor="password" className="pl-4">
            Password
          </label>
          <PasswordInput />
        </div>
        
        <div className="flex items-center justify-center">
        <div className="flex items-center justify-center w-30 h-10 rounded-lg drop-shadow-lg  bg-blue-400 border-black">
          <button type="submit" className=" border-black border-r-2">
             Submit
          </button>
        </div>
        </div>
      </form>
      
      
    </div>
    </div>
  )
}

export default Login