import React from 'react';

const DoctorCard = (props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={props.pictureUrl} alt={`${props.name} profile`} />
      <div className="px-6 py-4 bg-blue-300">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className="text-gray-700 text-base mb-2">Age:</p>
        <p className="text-gray-700 text-base mb-2">Specialty: {props.specialty}</p>
        <p className="text-gray-700 text-base mb-2">Experience: {props.experience} Years</p>
        <p className="text-gray-700 text-base">Works At {props.clinicName}, {props.city}</p>
      </div>
    </div>
  );
};

export default DoctorCard;