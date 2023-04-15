import React from 'react';
import './stars.css'

const DoctorCard = (props) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg z-0">
      <img className="w-full" src={props.pictureUrl} alt={`${props.name} profile`} />
      <div className="px-6 py-4 bg-blue-300">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className="text-gray-700 text-base mb-2">Age: {props.age}</p>
        <p className="text-gray-700 text-base mb-2">Specialty: {props.specialty}</p>
        <p className="text-gray-700 text-base mb-2">Experience: {props.experience} Years</p>
        <p className="text-gray-700 text-base">Works At {props.clinicName}, {props.city}</p>
        <p class="starability-result ml-20 mt-4" data-rating={props.rating}>
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;