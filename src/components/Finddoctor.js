import React from "react";
import AutocompleteSearchBar from "./AutoCompleteSearchBar";
import './Home.css'
import './Finddoctor.css'

function Finddoctor() {
  return (
    <>
      <div class="py-20 h-1/2 px-2 space-y-10 bg-blue-500 text-white">
        <h1 className="text-2xl text-center font-semibold  doctor-title">Find Doctors by their Specialty</h1>
        <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
          <div class="md:flex">
            <div class="w-full p-3">

              <div class="relative z-40 subtext">
                <AutocompleteSearchBar />
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="promo text-white bg-blue-500  text-black flex flex-row justify-center space-x-10 py-24 z-1">
        <div className="card rounded-md  w-1/4 flex flex-col space-y-8">

          <h3 className='text-center p-3 text-xl text-white font-bold subtext'>Profiles for Every Doctor in the Country</h3>

          <img className='h-[100px]  mx-auto items-center' src="/doctor.png" alt="" />


        </div>
        <div className="card  rounded-3xl w-1/4 flex flex-col ">
          <h3 className='text-center text-white p-3 text-xl font-bold subtext'>More Than 10 Million Patient Ratings</h3>
          <img className='h-[100px] mx-auto items-center my-auto' src="/stars.png" alt="/stars.png" />
        </div>
        <div className="card rounded-3xl p-3  w-1/4 flex flex-col space-y-8">
          <h3 className='text-center text-white text-xl font-bold subtext'>Find Your Ideal Care</h3>
          <img className='h-[100px] mx-auto items-center my-auto' src="/nmod.jpg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Finddoctor;
