import React from 'react';
import './divider.css';

function midTitleDivider({ title, width }) {
  return (
    <div className='flex-row dividerWrapper'>
      <span
        className='hrLine'
        style={width && { width: width }}
      />
      <span className='title'>{title}</span>
      <span
        className='hrLine'
        style={width && { width: width }}
      />
    </div>
  );
}

export default midTitleDivider;
