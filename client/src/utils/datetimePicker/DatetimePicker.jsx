// DatetimePicker.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatetimePicker.css';

const DatetimePicker = ({ defaultDate, onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(defaultDate);

  const handleDateChange = date => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <div className="datetime-picker-container">
      <span>Выберите дату:</span>
      <DatePicker
        className="custom-datepicker"
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
      />
    </div>
  );
};

export default DatetimePicker;
