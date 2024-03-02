import React from 'react';
import './radio.css';

const RadioButton = ({ title, onClick, selected, value, data, ...props }) => {
  return (
    <div className='round'>
      <input
        type='checkbox'
        id='checkbox'
        name={data?.name}
        value={data?.id}
        checked={selected}
        onChange={(e) => onClick(e, data)}
      />
      <label
        htmlFor='checkbox'
        {...props}></label>
    </div>
  );
};

export default RadioButton;
