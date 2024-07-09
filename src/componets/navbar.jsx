import React from 'react'
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'



function Navbar() {
  const switcher = useNavigate();
  return (
    <>
   
      <div className="nav">
          <div className='logo'><img src={Logo} alt="T/S logo" /></div>
          <ul className={`pageLinks `}>
           
                <li><a href="/">Home</a></li>
                <li><a href="/about">About US</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact Us</a></li>
            
          </ul>
          <div className='navBtn'>
            <button onClick={() => switcher('/signIn')}>Sign In</button>
            <button id='sign-up' onClick={() => switcher ('/signUp')}>Sign Up</button>
          </div>

    
      </div>
    </>
  )
}

export default Navbar
