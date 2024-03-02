import React from 'react';
import '../../style/DashboardCenter.css';

function StepResults({ content, icon, title }) {
  return (
    <div className='result-wrapper flex-row align-center'>
      {icon && (
        <img
          alt={title}
          src={icon}
        />
      )}
      <div className='para-wrap'>{content}</div>
    </div>
  );
}

export default React.memo(StepResults);
