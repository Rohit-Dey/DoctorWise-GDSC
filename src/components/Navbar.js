import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
function Navbar() {
  return (
    
<nav className="flex flex-col md:flex-row bg-gray-900 text-white shadow-md leading-none">
  <div className="flex mx-24 items-center  py-5 md:py-0">
       <img className='' src="/logo.png" alt="" />
    <h1 className="text-2xl ml-2 inline-block">DoctorWise</h1>
  </div>
  <div className="flex md:flex-row justify-right mx-auto  bg-gray-900">
    <ul className="text-lg space-x-5 md:flex md:ml-auto ">
      <li>
        <NavLink to="/" className="w-full md:w-auto p-5 inline-block border-b-4 border-transparent hover:border-white " href="">Home</NavLink>
      </li>
      
      <li><NavLink to="/finddoctor" className="w-full md:w-auto p-5 inline-block border-b-4 border-transparent hover:border-white " href="">Find a Doctor</NavLink></li>
      
      <li><NavLink to="/contact" className="w-full md:w-auto p-5 inline-block border-b-4 border-transparent hover:border-white " href="">Contact Us</NavLink></li>
      
    </ul>
    <ul className='space-x-5 flex flex-row-reverse  text-lg mx-24'>
    <li><NavLink to="/login" className="w-full  md:w-auto p-5 inline-block border-b-4 border-transparent hover:border-white " href="">Log In</NavLink></li>
      <li><NavLink to="/register" className="w-full   md:w-auto p-5 inline-block border-b-4 border-transparent hover:border-white " href="">Sign Up</NavLink></li>
    </ul>
  </div>
</nav>



  )
}

export default Navbar