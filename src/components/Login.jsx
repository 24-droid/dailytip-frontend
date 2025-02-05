import React, { useState } from "react";
import { PasswordInput } from "./ui/password-input";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSuccess(""); 

    try {
      const response = await fetch("https://dailytip-backend.onrender.com/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Thanks for subscribing!"); // Show success message
        alert("Login Successful! Redirecting... \n Thanks for subscribing!");
        navigate("/"); // Redirect to home or dashboard
      } else {
        setError(data.error || "Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="flex flex-col items-center justify-center w-120 bg-amber-200 m-auto rounded-lg border-amber-600 border-r-2"
        style={{ border: "2px solid black" }}
      >
        <p
          className="font-[40%] text-center text-4xl mb-4"
          style={{ fontSize: "1.6rem", lineHeight: "1.2", fontFamily: "Roboto" }}
        >
          Login
        </p>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[80%]">
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
              style={{ border: "2px solid black" }}
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <div>
            <label htmlFor="password" className="pl-4">
              Password
            </label>
            <PasswordInput
              name="password"
              style={{ border: "2px solid black" }}
              onChange={handleChange}
              value={formData.password}
            />
          </div>

          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-30 h-10 rounded-lg drop-shadow-lg bg-blue-400 border-black">
              <button type="submit" className="border-black border-r-2">
                Submit
              </button>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center pt-4">
            <p className="text-gray-700">Don't have an account?{" "}</p>
            <Link to="/signup" className="text-white hover:opacity-40 underline">
              Signup Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
