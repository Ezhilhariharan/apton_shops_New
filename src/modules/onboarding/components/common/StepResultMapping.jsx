import React from 'react';
import '../../style/DashboardCenter.css';

import { Step1Results, Step2Results } from '../../../../constant/app/dashboard/DashboardExtended';
import StepResults from './StepResults';

import { useAspSelector } from '../../../../test/jest-redux-hooks';

const StepResultMapping = ({ currentItem }) => {
  const { steps } = useAspSelector((state) => state.dashBoard);

  return (
    <>
      {steps > 1 && currentItem === 1 && (
        <div
          className='step1-result-wrapper flex-row space-between'
          style={{ marginTop: '10px' }}>
          {Step1Results?.map((item, id) => (
            <StepResults
              key={id}
              icon={item?.icon}
              content={item?.content}
            />
          ))}
        </div>
      )}

      {steps > 2 && currentItem === 2 && (
        <div
          className='step1-result-wrapper flex-row space-between'
          style={{ marginTop: '10px' }}>
          {Step2Results?.map((item, id) => (
            <StepResults
              key={id}
              icon={item?.icon}
              content={item?.content}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default StepResultMapping;
