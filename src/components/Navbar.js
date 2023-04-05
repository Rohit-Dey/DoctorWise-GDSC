import React from 'react'

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
        <a className="w-full md:w-auto p-5 inline-block border-b-4 border-transparent hover:border-white " href="">Home</a>
      </li>
      <li><a className="w-full md:w-auto p-5 inline-block border-b-4 border-transparent hover:border-white " href="">About</a></li>
      <li><a className="w-full md:w-auto p-5 inline-block border-b-4 border-transparent hover:border-white " href="">Projects</a></li>
      <li><a className="w-full md:w-auto p-5 inline-block border-b-4 border-transparent hover:border-white " href="">Blog</a></li>
      <li><a className="w-full md:w-auto p-5 inline-block border-b-4 border-transparent hover:border-white " href="">Contact</a></li>
    </ul>
  </div>
</nav>



  )
}

export default Navbar