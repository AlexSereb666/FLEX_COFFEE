import React, { useState } from 'react';
import './CustomDropdown.css'

const CustomDropdown = ({ options, onSelect, text }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <select className='Custom-Dropdown' value={selectedOption} onChange={handleSelectChange}>
      <option className='Custom-Dropdown__main' value="" disabled>{text}</option>
      {options.map((option) => (
        <option className='Custom-Dropdown__option' key={option.id} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default CustomDropdown;
