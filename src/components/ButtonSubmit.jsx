import React from 'react';

const Button = ({ text }) => {
  return (
    <button 
    
      type="submit"
      className="bg-blue-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
