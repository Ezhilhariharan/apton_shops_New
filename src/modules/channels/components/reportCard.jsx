import React from 'react';

import '../styles/transactionWidget.css';

import { Button } from '../../../components/form/Button/Button';

const Report = ({ header, headerValue, report, button = false, onClick }) => {
  return (
    <div className='scrollCard flex-column space-evenly'>
      <div className='flex-row space-between '>
        {header && <div className='font-medium weight-bold'>{header}</div>}
        {headerValue && <div className='font-large weight-bold'>{headerValue}</div>}
      </div>

      {report?.map((r, e) => (
        <div className='flex-row space-between'>
          <div className='font-medium weight-medium'>{r?.name}</div>

          <div className='font-large weight-bold'>{r?.value}</div>
        </div>
      ))}
      {button && (
        <div className=' flex-row justify-center'>
          <Button
            label={'Get More'}
            size={'medium'}
            onClick={onClick}
          />
        </div>
      )}
    </div>
  );
};

export default Report;
