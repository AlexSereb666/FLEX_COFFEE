import React from 'react';
import './ButtonMain.css';

function ButtonMain({ text, onClick }) {
  return (
    <button className='btn-main' onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonMain;
