import React,{useContext,useState} from "react";
import AutocompleteSearchBar from "./AutoCompleteSearchBar";
import './Home.css'
import './Finddoctor.css'
import { NavLink } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { Logincontext } from './ContextProvider';
function Finddoctor() {
  const navigate=useNavigate();
  const { account, setAccount } = useContext(Logincontext);
  const [showModal, setShowModal]=useState(false)
  
  return (
    <>
    {account?(
    <div>
      <div class="py-20 h-1/2 px-2 space-y-10 bg-gray-900 text-white">
        <h1 className="text-2xl text-center font-semibold doctor-title">Find Doctors by their Specialty</h1>
        <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
          <div class="md:flex">
            <div class="w-full p-3">

              <div class="z-40">
                  <AutocompleteSearchBar />
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="promo text-white bg-gray-900  text-black flex flex-row justify-center space-x-10 py-24 z-1 subtext">
        <div className="card rounded-md  w-1/4 flex flex-col space-y-8">

          <h3 className='text-center p-3 text-xl text-white font-bold'>Profiles for Every Doctor in the Country</h3>

          <img className='h-[100px]  mx-auto items-center' src="/doctor.png" alt="" />


        </div>
        <div className="card  rounded-3xl w-1/4 flex flex-col ">
          <h3 className='text-center text-white p-3 text-xl font-bold'>More Than 10 Million Patient Ratings</h3>
          <img className='h-[100px] mx-auto items-center my-auto' src="/stars.png" alt="/stars.png" />
        </div>
        <div className="card rounded-3xl p-3  w-1/4 flex flex-col space-y-8">
          <h3 className='text-center text-white text-xl font-bold'>Find Your Ideal Care</h3>
          <img className='h-[100px] mx-auto items-center my-auto' src="/nmod.jpg" alt="" />
        </div>
      </div>
      </div>
    ):(
   
        <>
          <div
            className="  justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-black ">
                    Login Please
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black font-extralight opacity-40 float-right text-3xl leading-none  outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <NavLink to="/login"><p className='text-black'>x</p></NavLink>
                  </button>
                </div>
                
                <div className="relative p-6 flex flex-row space-x-4">
                
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    You must Login first in order to use our services
                  </p>
                </div>
               
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-slate-900 text-slate-300 rounded-xl hover:text-slate-900 hover:bg-slate-300 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={ () => setShowModal(false)}
                  >
                    <NavLink to="/login">Login</NavLink>
                    
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) }
    </>
  );
}

export default Finddoctor;
