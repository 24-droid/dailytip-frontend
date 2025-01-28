import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
const Home = () => {
  return (
    <>
   <Navbar />
   <Hero />
   <div className='bottom-0 left-0 right-0'>
    <div >
      <footer className='flex  items-center gap-20 justify-center bg-black h-12 text-white' style={{fontFamily:'Roboto'}}> 
        <p>Made with ❤️</p>
        <Link to="https://github.com/24-droid">Follow Me</Link>
        </footer>
    </div>
   </div>
   </>
  );
};

export default Home;
