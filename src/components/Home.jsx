import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
const Home = () => {
  return (
    <>
   <Navbar />
   <Hero />
   <Footer />
   </>
  );
};

export default Home;
