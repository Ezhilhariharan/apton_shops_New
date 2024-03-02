import React from 'react';
import './Index.css';

function Index({ width, status, backgroundColor, color }) {
  return (
    <div className='w-80'>
      <div
        className='horProgressWrapper p-relative '
        style={{ background: backgroundColor }}>
        <div
          className='horProgressBar p-absolute'
          style={{ background: color, width: width }}></div>
      </div>
      <div className='flex-row space-between'>
        <span className='progressStatus'>{status}</span>
        <span className='progressStatus'>{width}</span>
      </div>
    </div>
  );
}

export default React.memo(Index);
