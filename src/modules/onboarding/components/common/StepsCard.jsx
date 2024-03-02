import React from 'react';
import '../../style/Dashboard.css';

const DashBoardStep = ({ children, style }) => {
  return (
    <div
      className='dashboardStepCard flex-column space-between'
      style={{ ...style }}>
      {children}
    </div>
  );
};

export default DashBoardStep;
