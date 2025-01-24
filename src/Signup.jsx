import React from 'react';
import { PasswordInput } from './components/ui/password-input';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black px-4">
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-white mb-6">Sign Up</h2>
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-300 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 h-12 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2 p-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 h-12 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
              placeholder="abc@example.com"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-semibold text-gray-300 mb-2">
              Role
            </label>
            <select
              id="role"
              name="role"
              className="w-full px-4 py-2 h-12 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
            >
              <option value="developer">Developer</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold  mb-2  text-white p-1 rounded"
            >
              Password
            </label>
            <PasswordInput
              id="password"
              className="w-full px-4 py-2 h-12 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-30 bg-white flex m-[50%]  py-3  text-white font-bold rounded-md  transition-colors shadow-md hover:shadow-lg"
          >
            Create Account
          </button>
        </form>
        <p className="text-sm text-gray-400 mt-6 text-center">
          Already have an account?{' '}
          <a href="#" className="text-green-400 font-semibold hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
