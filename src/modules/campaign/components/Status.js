import React from 'react';

const Status = ({ status }) => {
  switch (status) {
    case 0:
      return (
        <span
          style={{
            backgroundColor: 'var(  --BG-50)',
            color: 'var(--font-600)',
            padding: '5px 20px',
            borderRadius: '5px',
          }}>
          Draft
        </span>
      );
    case 1:
      return (
        <span
          style={{
            backgroundColor: 'var(--primaryBackground)',
            color: 'var(--primary)',
            padding: '5px 20px',
            borderRadius: '5px',
          }}>
          Running
        </span>
      );

    case 2:
      return (
        <span
          style={{
            backgroundColor: '#F0F8FD',
            color: 'var(--dashboardprimary)',
            padding: '5px 20px',
            borderRadius: '5px',
          }}>
          Completed
        </span>
      );

    default:
      return '--';
  }
};

export default Status;
