import React from 'react';
import StackedCards from './StackedCards'; // Import the StackedCards component

const Hero = () => {
  return (
    <div>
      <div className='min-h-screen z-50' style={{ paddingTop: '5%' }}>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='font-bold text-center' style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Hi, I'm Om.</h1>
          <h1 className='text-center' style={{ fontSize: '2rem', lineHeight: '1.2', fontFamily: 'Roboto', fontWeight: 'bold', marginTop: '1rem' }}>Subscribe to get the tips to build the web better.</h1>
          <div>
            <div className='flex flex-col md:flex-row gap-1' style={{ fontSize: '1.1rem', marginTop: '0.8rem' }}>
              <h1 className='text-red-500 text-center text-balance' style={{ fontWeight: 'bold' }}>Do u too hate the complexity of modern web development?</h1>
              <p className='text-center text-balance'>So here we go we daily provide tips to stay updated with the modern web development, Become more resilient.</p>
            </div>
            <div>
              <p className='text-center' style={{ marginTop: '2rem' }}>Please enter ur email below {'->'}</p>
            </div>
          </div>
          <div style={{ marginTop: '1rem' }} className='flex'>
            <input type='email' placeholder='abc@example.com' className='border-2 md:w-auto border-black p-4 rounded-md h-12' style={{ border: '2px solid black' }} />
            <button className='h-12 w-46 text-white p-4 rounded-sm' style={{ backgroundColor: '#F7272F', color: 'white', border: '2px solid black', margin: 'auto' }}>Get Daily Developer Tips</button>
          </div>
          <div className='border-b-2 border-gray-500' style={{ borderBottom: '2rem', borderColor: 'gray' }}>
            <em style={{ fontStyle: 'italic', paddingLeft: '1rem', marginTop: '1rem' }} className='flex flex-wrap'>The world is full of innovations, but the world of web development is still in its infancy. We are here to help you stay updated with the latest trends and developments in the field.</em>
            <p style={{ fontStyle: 'italic', paddingLeft: '1rem' }}>-Om</p>
          </div>
        </div>
      </div>
      {/* Include the StackedCards component here */}
      <StackedCards />
    </div>
  );
};

export default Hero;