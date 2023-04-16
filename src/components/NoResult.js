import React from 'react';

function NoResultsFound() {
  return (
    <div className="flex justify-center items-center h-64">
      <p style={{fontFamily:"'Montserrat', sans-serif", fontWeight:"600"}} className="text-red-500 text-5xl">No Doctors Found :(</p>
    </div>
  );
}

export default NoResultsFound;
