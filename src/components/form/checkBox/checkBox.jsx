import React from 'react';
import './checkBox.css';

const checkBox = ({ checked, value, onChangeClicked, disabled }) => {
  return (
    <>
      <label className='checkBoxContainer'>
        <input
          type='checkbox'
          name='checkbox'
          checked={checked}
          value={value}
          disabled={disabled}
          onChange={(e) => onChangeClicked(e)}
        />
      </label>
    </>
  );
};

export default checkBox;
