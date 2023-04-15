import React, { useState,useContext,useEffect } from "react";
import { Transition } from "@headlessui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { Logincontext } from "./ContextProvider";
import { Navigate } from "react-router-dom";
function Navbar(props) {
  const { account, setAccount } = useContext(Logincontext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate()
  useEffect(() => {
    const getdetailsvaliduser = async () => {
      const res = await fetch("http://localhost:8000/validuser", {
        method: "GET",
        headers: {
          
          Accept: "application/json",
          "Content-Type": "application/json",
          //"Access-Control-Allow-Origin":"http://localhost:3000",
          //"Access-Control-Allow-Credentials":true
        },
       
        credentials: "include",
      });
  
      const data = await res.json();
      // console.log(data);
  
      if (res.status !== 201) {
        console.log("first login");
      } else {
        // console.log("cart add ho gya hain");
        setAccount(data);
      }
    }; 
    getdetailsvaliduser();
  }, []);
  function lout(){
    setAccount(false)
  }
  const logoutuser = async () => {
    const res2 = await fetch("http://localhost:8000/logout", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Credentials":true,
        //"Access-Control-Allow-Origin":"http://localhost:3000",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      
      credentials: "include",
    });

    const data2 = await res2.json();
    // console.log(data2);

    if (!res2.status === 201) {
      const error = new Error(res2.error);
      throw error;
    } else {
      setAccount(false);
      
      toast.success("Logged Out Successfully", {
        position: "top-center",
      });
      navigate("/");
     
    }
  };
  return (
    <div className="sticky top-0 z-40">
      <nav className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex space-x-2">
                <img
                  className="h-8 w-8"
                  src="/logo.png"
                  alt="Workflow"
                />
                <h2 className="text-2xl text-white">DoctorWise</h2>
              </div>
              {account?(
              <span className="md:hidden pl-16 text-lg text-gray-300">Hey {account.name}</span>
              ):(<div></div>)}
              <div className="hidden md:block">
                <div className="ml-24 flex items-baseline space-x-8">
                  

                  <NavLink
                    to="/"
                    className="ml-24 text-gray-300 border-b-4 border-transparent hover:border-white px-3 py-2  text-lg font-medium"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/finddoctor"
                    className="text-gray-300 border-b-4 border-transparent hover:border-white px-3 py-2  text-lg font-medium"
                  >
                    Find A Doctor
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className="text-gray-300 border-b-4 border-transparent hover:border-white px-3 py-2  text-lg font-medium"
                  >
                    Contact Us
                  </NavLink>
                  {!account?(
                  <div className="log md:pl-64">
                
                  <NavLink
                    to="/login"
                    className="text-gray-300 border-b-4 border-transparent hover:border-white px-3 py-2  text-lg font-medium md:mr-2"
                  >
                    Login
                  </NavLink>
                  
                  <NavLink
                    to="/register"
                    className="text-gray-300 border-b-4 border-transparent hover:border-white px-3 py-2  text-lg font-medium "
                  >
                    Sign Up
                  </NavLink>
                  </div>):(
                    <div className="logout md:pl-64 space-x-5">
                    <span className="text-gray-300 text-lg font-medium">Hey {account.name}</span>
                    <button className="text-gray-300 p-2 rounded-md text-lg font-medium  hover:bg-slate-100 hover:text-slate-700" onClick={lout}>Logout</button>
                    </div>
                  )
}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink
                  to="/"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </NavLink>

                <NavLink
                  to="/finddoctor"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Find A Doctor
                </NavLink>

                <NavLink
                  to="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact Us
                </NavLink>
                {!account?
                (<div>
                <NavLink
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Sign Up
                </NavLink>
                </div>):(
                  <div></div>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>

      
      
    </div>
  );
}

export default Navbar;
