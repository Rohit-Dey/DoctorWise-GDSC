import React from 'react'

function Home() {
  return (
    <div className='bg-gradient-to-b from-[#43cea2] to-[#185a9d]'>
      <div className="flex flex-col    ">
        <h1 className='text-center py-8  text-5xl font-semibold'>Feel Better About Finding Healthcare </h1>
        <div className="images py-5 mx-auto justify-center flex flex-col md:flex-row space-x-24">
        <img className='md:w-1/3 rounded-md' src='/doc.jpg'/>
        <img className='md:w-1/3 rounded-md' src='/hospital.jpg'/>
        </div>
      </div>
      <div className="promo  flex flex-row justify-center space-x-10 py-5">
        <div className="card w-1/4 flex flex-col space-y-8">
          
          <h3 className='text-center text-xl font-bold'>Profiles for Every Doctor in the Country</h3>
          
          <img className='h-[100px] mx-auto items-center' src="/doctor.png" alt="" />
          
          
        </div>
        <div className="card w-1/4 flex flex-col ">
          <h3 className='text-center text-xl font-bold'>More Than 10 Million Patient Ratings</h3>
          <img className='h-[100px] mx-auto items-center my-auto' src="/stars.png" alt="/stars.png" />
        </div>
        <div className="card w-1/4 flex flex-col space-y-8">
          <h3 className='text-center text-xl font-bold'>Find Your Ideal Caregiver</h3>
          <img className='h-[100px] mx-auto items-center my-auto' src="/search.png" alt="" />
        </div>
      </div>
      <div className="hospital flex flex-col">
        <h1 className='text-4xl font-bold text-center py-8 underline'>Find Top Hospitals Closest To You</h1>
        <div className="pics flex flex-col md:flex-row mx-10 space-x-10">
          <div className=" w-1/2 info flex flex-col space-y-8">
          <p className='text-2xl py-8 font-semibold text-center '>DoctorWise assists you in finding hospital that prioritize and excel in patient safety nationwide.</p>
          <p className='text-xl text-center font-serif'>When you need a medical procedure, finding the right doctor is only half the equation. Receiving your treatment at the right hospital can have a dramatic impact on your outcome.We evaluate hospital quality for conditions and procedures based solely on clinical outcomes to help consumers understand, compare and evaluate hospital performance.</p>
          </div>
            

            <img className='w-1/2 rounded-md' src="/hosp.jpg" alt="" />
        </div>
      </div>
      <div className="doctor flex flex-col py-8">
        <h1 className='text-4xl font-bold text-center py-8 underline'>Find the Best Doctors to Care for You</h1>
        <div className="pics flex flex-col md:flex-row mx-10 space-x-10">
         <img className='w-1/2 rounded-md' src="/find_doc.jpg" alt="" />
          <div className=" w-1/2 info flex flex-col space-y-8">
          <p className='text-2xl py-8 font-semibold text-center '>Finding the Right Care Matters</p>
          <p className='text-xl text-center font-serif'>Choosing a doctor isn’t the same as finding a restaurant for dinner or looking up the nearest dry cleaners. That’s why Healthgrades gives you the full picture of a doctor’s qualifications, including clinical experience, hospital quality measures, and patient feedback.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home