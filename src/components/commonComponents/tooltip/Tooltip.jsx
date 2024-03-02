import React from 'react';
import './Tooltip.css';

function Tooltip({ children, title }) {
  return (
    <span className='tooltip'>
      <span className='tooltiptext'>{title}</span>
      {children}
    </span>
  );
}

export default Tooltip;
