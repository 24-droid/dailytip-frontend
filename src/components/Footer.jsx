import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <div className='bottom-0 left-0 right-0'>
    <div >
      <footer className='flex  items-center gap-20 bg-black justify-center h-12 text-white' style={{fontFamily:'Roboto'}}> 
        <p>Made with ❤️</p>
        <Link to="https://github.com/24-droid">Follow Me</Link>
        </footer>
    </div>
   </div>
    </div>
  )
}

export default Footer