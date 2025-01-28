import React from 'react';
import cracked from '../assets/cracked.png';

const Home = () => {
  return (
    <div className="w-full h-20 bg-black">
      <nav className="h-full flex items-center justify-center gap-[50%] px-6">
        {/* Logo and Heading */}
        <div className="flex items-center gap-4 ">
          <img
            src={cracked}
            alt="Cracked Logo"
            className="w-20 h-24 object-cover rounded-full"
          />
          <h1 className=" font-bold text-white  drop-shadow-md" style={{ fontSize: '1.5rem', lineHeight: '1.2',fontFamily:'Roboto' }}>Become a Cracked Developer</h1> {/* Increased text size */}
        </div>
        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li className="hover:underline decoration-orange-500 cursor-pointer text-white"style={{ fontSize: '1.1rem', lineHeight: '1.2',fontFamily:'Roboto' }}>About</li>
          <li className="hover:underline decoration-orange-500 cursor-pointer text-white"style={{ fontSize: '1.1rem', lineHeight: '1.2',fontFamily:'Roboto' }}>Join</li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
