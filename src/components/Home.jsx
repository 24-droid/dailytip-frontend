import React from 'react';
import cracked from '../assets/cracked.png';

const Home = () => {
  return (
    <div className="w-full h-20 bg-white">
      <nav className="h-full flex items-center justify-center gap-[50%] px-6">
        {/* Logo and Heading */}
        <div className="flex items-center gap-4">
          <img
            src={cracked}
            alt="Cracked Logo"
            className="w-24 h-24 object-cover rounded-full"
          />
          <h1 className="text-8xl font-bold text-[#272727]">Become a Cracked Developer</h1> {/* Increased text size */}
        </div>
        {/* Navigation Links */}
        <ul className="flex gap-8 text-lg">
          <li className="hover:underline decoration-orange-500 cursor-pointer">About</li>
          <li className="hover:underline decoration-orange-500 cursor-pointer">Join</li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
