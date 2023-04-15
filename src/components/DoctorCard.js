import React from 'react';
import './stars.css'
import './DoctorCard.css'

const DoctorCard = (props) => {
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
        <button
      className="bg-yellow-400 mt-4 ml-16 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded"
    >
      Book An Appointment
    </button>
      </div>
    </div>
  );
};

export default DoctorCard;