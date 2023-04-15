import React from 'react';

const DoctorCard = ({ name, pictureUrl, specialty, clinicName }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={pictureUrl} alt={`${name}'s profile`} />
      <div className="px-6 py-4 bg-blue-300">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-2">Age: 45</p>
        <p className="text-gray-700 text-base mb-2">Specialty: {specialty}</p>
        <p className="text-gray-700 text-base mb-2">Experience: 15 Years</p>
        <p className="text-gray-700 text-base">Works At {clinicName}</p>
      </div>
    </div>
  );
};

export default DoctorCard;