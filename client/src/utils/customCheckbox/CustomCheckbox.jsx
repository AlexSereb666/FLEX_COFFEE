import React, { useState } from 'react';
import './CustomCheckbox.css';

const CustomCheckbox = ({ label, productId, onChange }) => {
  const [checked, setChecked] = useState(true); // По умолчанию выделен

  const handleCheckboxChange = () => {
    const newCheckedState = !checked;
    setChecked(newCheckedState);

    // Вызываем onChange с новым состоянием
    onChange && onChange(productId, newCheckedState);
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};

export default CustomCheckbox;
