import React,{useState} from 'react';
import './stars.css'
import './DoctorCard.css'

const DoctorCard = (props) => {
  const [showModal, setShowModal]=useState(false)
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg z-0">
      <img className="w-full" src={props.pictureUrl} alt={`${props.name} profile`} />
      <div className="px-6 py-4 bg-blue-300 card-font">
        <div className="font-bold text-2xl mb-2 name">{props.name}</div>
        <p className="text-gray-700 text-base mb-2">Age: {props.age}</p>
        <p className="text-gray-700 text-base mb-2">Specialty: {props.specialty}</p>
        <p className="text-gray-700 text-base mb-2">Experience: {props.experience} Years</p>
        <p className="text-gray-700 text-base">Works At {props.clinicName}, {props.city}</p>
        <p class="starability-result ml-20 mt-4" data-rating={props.rating}/>
        <button onClick={() => setShowModal(true)}
      className="bg-yellow-400 mt-4 ml-16 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded"
    >
      Book An Appointment
    </button>
    {showModal ? (
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
                    Contact Them
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black font-extralight opacity-40 float-right text-3xl leading-none  outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <p className='text-black'>x</p>
                  </button>
                </div>
                
                <div className="relative p-6 flex flex-row space-x-4">
                <i className="fa fa-envelope text-slate-900 pt-6 "></i>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {props.name.substr(props.name.lastIndexOf('.') + 1).toLowerCase()}@gmail.com
                  </p>
                </div>
               
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-slate-900 text-slate-300 rounded-xl hover:text-slate-900 hover:bg-slate-300 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </div>
    </div>
  );
};

export default DoctorCard;