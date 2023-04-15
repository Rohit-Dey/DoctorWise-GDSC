import React from 'react';

const SearchButton = ({onClick}) => {
  return (
    <button style={{marginLeft:"40%"}} type='submit'
      className="bg-blue-500 hover:bg-pink-700 text-white mt-2 font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      Search
    </button>
  );
};

export default SearchButton;
