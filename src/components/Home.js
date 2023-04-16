import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='bg-gradient-to-b from-gray-900 to-gray-800 text-white'>
      <div className="flex flex-col  b  ">
        <h1 className='text-center py-8  text-5xl font-semibold main-line'>Feel Better About Finding Healthcare </h1>
        <div className="images py-5 mx-auto justify-center flex flex-col md:flex-row md:space-x-24 space-y-8 md:space-y-0">
        <img className='md:w-1/3 mx-auto md:mx-0  w-4/5 rounded-3xl border-white border-double border-4' src='/doc.jpg'/>
        <img className='md:w-1/3  mx-auto md:mx-0  w-4/5 rounded-3xl border-white border-double border-4' src='/hospital.jpg'/>
        </div>
      </div>
      
      <div className="hospital flex flex-col mx-auto justify-center space-y-5 md:space-y-0">
        <h1 className='text-4xl font-bold text-center py-8 underline subs'>Find Top Hospitals Closest To You</h1>
        <div className="pics flex flex-col md:flex-row mx-10 md:space-x-10 space-y-8 md:space-y-0">
          <div className=" md:w-1/2 info flex flex-col space-y-8 sum">
          <p className='text-2xl py-8 font-semibold text-center '>DoctorWise assists you in finding hospital that prioritize and excel in patient safety nationwide.</p>
          <p className='text-xl text-center font-serif'>When you need a medical procedure, finding the right doctor is only half the equation. Receiving your treatment at the right hospital can have a dramatic impact on your outcome.We evaluate hospital quality for conditions and procedures based solely on clinical outcomes to help consumers understand, compare and evaluate hospital performance.</p>
          </div>
            

            <img className='md:w-1/2 rounded-full border-double border-4' src="/hosp.jpg" alt="" />
        </div>
      </div>
      <div className="doctor flex flex-col py-8 mx-auto justify-center space-y-5 md:space-y-0">
        <h1 className='text-4xl font-bold text-center py-8 underline subs'>Find the Best Doctors to Care for You</h1>
        <div className="pics flex flex-col md:flex-row mx-10 md:space-x-10">
         <img className='md:w-1/2 rounded-full border-double border-4' src="/find_doc.jpg" alt="" />
          <div className=" md:w-1/2 info flex flex-col space-y-8 sum">
          <p className='text-2xl py-8 font-semibold text-center '>Finding the Right Care Matters</p>
          <p className='text-xl text-center font-serif'>Choosing a doctor isn’t the same as finding a restaurant for dinner or looking up the nearest dry cleaners. That’s why Healthgrades gives you the full picture of a doctor’s qualifications, including clinical experience, hospital quality measures, and patient feedback.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home