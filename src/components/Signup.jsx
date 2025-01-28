import React from "react";
import { PasswordInput } from "./ui/password-input";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="flex flex-col items-center justify-center w-120 bg-amber-200 m-auto rounded-lg border-amber-600 border-r-2" style={{border:'2px solid black'}}>
      <p className="font-[40%] text-center text-4xl mb-4"style={{ fontSize: '1.6rem', lineHeight: '1.2',fontFamily:'Roboto' }}>Sign Up</p>
      <form className="flex flex-col gap-4 w-[80%] ">
        <div>
          <label htmlFor="username" className="pl-4">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full h-12 bg-white border border-black rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent"
            placeholder="John Doe"
            style={{border:'2px solid black'}}
          />
        </div>
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
            style={{border:'2px solid black'}}
          />
        </div>
        <div>
          <label htmlFor="role" className="pl-4">
            Role
          </label>
          <select htmlFor="role" className="w-full h-12 bg-white border border-black rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent"style={{border:'2px solid black'}}>
            <option value="Developer">Developer</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
          </select>
        </div>
       
        <div>
          <label htmlFor="password" className="pl-4">
            Password
          </label>
          <PasswordInput style={{border:'2px solid black'}}/>
        </div>
        
        <div className="flex items-center justify-center">
        <div className="flex items-center justify-center w-30 h-10 rounded-lg drop-shadow-lg  bg-blue-400 border-black">
          <button type="submit" className=" border-black border-r-2">
             Submit
          </button>
        </div>
        </div>
      </form>
      <div className="flex gap-2 items-center justify-center pt-4">
      <p className="text-gray-700">Already have an account?{" "}
        </p>
        <Link to="/login" className="text-white hover:opacity-40 underline">Login Here</Link> 
        </div> 
      
      
    </div>
    </div>
  );
};

export default Signup;
