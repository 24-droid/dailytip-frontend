import React from 'react';
import {  useNavigate } from 'react-router-dom';
import Lottie from "react-lottie-player";
import animationData from '../assets/Animation - 1738125493234.json'
import ParticleBackground from './ParticleBackground';
const Hero = () => {
  const navigate=useNavigate()
  return (
    <div>
      <div className='relative min-h-screen z-50' style={{ paddingTop: '5%' }}>
        <ParticleBackground />
        <div className=' relative flex flex-col items-center justify-center'>
          <h1 className='font-bold text-center' style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Hi, I'm Om.</h1>
          <h1 className='text-center' style={{ fontSize: '2.1rem', lineHeight: '1.2', fontFamily: 'Roboto', fontWeight: 'bold', marginTop: '1rem' }}>Subscribe to get the tips to build the web better.</h1>
          <div>
            <div className='flex flex-col  gap-1' style={{ fontSize: '1.1rem', marginTop: '0.8rem' }}>
              <h1 className='text-red-500 text-center text-balance' style={{ fontWeight: 'bold' }}>Do u too hate the complexity of modern web development?</h1>
              <p className='text-center text-balance'>So here we go we daily provide tips to stay updated with the modern web development, Become more resilient.</p>
            </div>
            <div>
              <p className='text-center' style={{ marginTop: '2rem' }}>Join us {'->'}</p>
            </div>
          </div>
          <div style={{ marginTop: '1rem' }} className='flex'>
            <button className='h-12 w-46 text-white p-4 rounded-sm hover:cursor-pointer' style={{ backgroundColor: '#F7272F', color: 'white', border: '2px solid black', margin: 'auto' }} onClick={()=>navigate('/login')}>Get Daily Developer Tips </button>
          </div>
          <div className='border-b-2 border-gray-500' style={{ borderBottom: '2rem', borderColor: 'gray' }}>
            <em style={{ fontStyle: 'italic', paddingLeft: '2rem', marginTop: '1rem' }} className='flex flex-wrap md:text-balance md:w-180'>The world is full of innovations, but the world of web development is still in its infancy. We are here to help you stay updated with the latest trends and developments in the field.</em>
            <p style={{ fontStyle: 'italic', paddingLeft: '2rem' }}>-Om</p>
          </div>
          </div>
          <div className='flex items-center justify-center'>
          <Lottie
              loop
              animationData={animationData}
              play
              style={{ width: 200, height: 200 }}
              
            />
          </div>
       
      </div>
      
    </div>
  );
};

export default Hero;