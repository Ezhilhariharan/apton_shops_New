import React from "react";
import "./radioOption.css";

const RadioOption = ({ value, selectedValue, onChange, id, name }) => {
  const handleRadioChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="round">
      <input
        type="radio"
        id={id}
        value={value}
        name={name}
        checked={selectedValue === value}
        onChange={handleRadioChange}
      />
      <label htmlFor={value}></label>
    </div>
  );
};

export default RadioOption;
