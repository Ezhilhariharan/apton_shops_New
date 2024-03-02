import React from 'react';
import '../styles/okr.css';

import { OKRListName } from '../../../constant/app/okr/okr';

const GoalList = () => {
  return (
    <div className='OKRwrapper'>
      {OKRListName?.map((item) => (
        <div
          key={item?.id}
          className='Okr-container flex-row space-between'>
          <span className='flex-row p-5'>
            <img
              src={item.icon}
              alt='campaignicon'
            />
            {item?.name}
          </span>
          {item?.duration}
          <span
            className='Task  align-center'
            style={{
              backgroundColor: 'rgba(255, 251, 235, 1)',
              width: '98px',
              height: '30px',
              borderRadius: '5px',
              color: 'rgba(246, 167, 35, 1)',
            }}>
            {item?.Task}
          </span>
        </div>
      ))}
    </div>
  );
};

export default GoalList;
