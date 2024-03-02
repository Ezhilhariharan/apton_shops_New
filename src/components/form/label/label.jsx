import React from 'react';
import './label.css';

function label({ title, required }) {
  return (
    <div className='label'>
      {title}
      {required && <span className='required'>*</span>}
    </div>
  );
}

export default label;
