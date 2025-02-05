import React, { useState } from "react";
import { PasswordInput } from "./ui/password-input";
import { Link, useNavigate } from "react-router-dom";
import { nav } from "framer-motion/client";
const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "Developer",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // clears previous errors
    try {
      const response = await fetch(
        "https://dailytip-backend.onrender.com/api/v1/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        alert(
          "Signup Successful! Redirecting to login... \n Checkout the Welcome Email 📩"
        );
        navigate("/login");
      } else {
        setError(data.error || "Signup Failed");
      }
    } catch (error) {
      console.error("Error while signing in:", error);
      setError("Something went wrong! Please try again.");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div
        className="flex flex-col items-center justify-center w-120 bg-amber-200 m-auto rounded-lg border-amber-600 border-r-2"
        style={{ border: "2px solid black" }}
      >
        <p
          className="font-[40%] text-center text-4xl mb-4 text-black"
          style={{
            fontSize: "1.6rem",
            lineHeight: "1.2",
            fontFamily: "Roboto",
          }}
        >
          Sign Up
        </p>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[80%] ">
          <div>
            <label htmlFor="username" className="pl-4 text-black">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full h-12 bg-white text-black border border-black rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent"
              placeholder="John Doe"
              onChange={handleChange}
              value={formData.username}
              style={{ border: "2px solid black" }}
            />
          </div>
          <div>
            <label htmlFor="email" className="pl-4 text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full h-12 bg-white border text-black border-black rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent"
              placeholder="abc@example.com"
              onChange={handleChange}
              value={formData.email}
              style={{ border: "2px solid black" }}
            />
          </div>
          <div>
            <label htmlFor="role" className="pl-4 text-black">
              Role
            </label>
            <select
              id="role"
              name="role"
              onChange={handleChange}
              value={formData.role}
              className="w-full h-12 text-black bg-white border border-black rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent appearance-none"
              style={{ border: "2px solid black", color: "black" }}
            >
              <option value="Developer" className="text-black">
                Developer
              </option>
              <option value="Teacher" className="text-black">
                Teacher
              </option>
              <option value="Student" className="text-black">
                Student
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="password" className="pl-4 text-black">
              Password
            </label>
            <PasswordInput
              name="password"
              type="password"
              style={{ border: "2px solid black", color: "black" }}
              className="text-black"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-30 h-10 rounded-lg drop-shadow-lg  bg-blue-400 border-black">
              <button
                type="submit"
                className=" border-black border-r-2 text-black"
                style={{ color: "black" }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="flex gap-2 items-center justify-center pt-4">
          <p className="text-gray-700">Already have an account? </p>
          <Link
            to="/login"
            className="text-black hover:opacity-40 underline"
            style={{ color: "black" }}
          >
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
