import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { PiInstagramLogoLight } from "react-icons/pi";

function Footer() {
  return (
    <div className="footer-ctr">
        <div className='footer'>
           <div><a href="">Newsletters</a></div>
           <div className='footer1-btn'><button className='search'><h5>Search</h5></button><button className='contact-us'>Contact Us</button></div>
           <div className='footer1-icon'><FaGoogle  className='icon1'/><FaFacebook className='icon1'/><BsTwitterX className='icon1'/><PiInstagramLogoLight className='icon1'/></div>
        </div>
    </div>
  )
}

export default Footer
