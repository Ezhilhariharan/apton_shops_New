import React from 'react';
import './Status.css';

export const Status = ({ status }) => {
  return (
    <div
      className='status-item'
      style={{
        backgroundColor:
          status === 'Todo' ? '#f6f6f6' : status === 'Done' ? '#25C27733' : 'transparent',
        color: status === 'Todo' ? '#898e99' : status === 'Done' ? '#25c277' : 'transparent',
      }}>
      {status}
    </div>
  );
};
