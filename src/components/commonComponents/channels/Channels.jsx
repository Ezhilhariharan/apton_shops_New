import React from 'react';
import './channels.css';
import { subFilter } from '../../../constant/app/Filter/Filter';
import RadioButton from '../../form/radio/RadioButton';

const Channels = () => {
  return (
    <>
      <div
        className='channel-wrapper-main 
                align-center
                justify-center'>
        <span>CHANNELS</span>
        {subFilter?.map((item) => (
          <div
            className='channel-wrapper  flex-row align-center space-between pointer'
            key={item?.id}
            style={{
              borderBottom: item?.id !== 7 ? '1px solid var(--font-50)' : 'none',
            }}>
            <div className='channel-wrap flex-row align-center'>
              <img
                src={item?.icon}
                alt='icon'
                className='mr-5'
              />
              <span>{item?.Filter_name}</span>
            </div>
            <div className='mt-5'>{item?.id === 3 && <RadioButton selected={true} />}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Channels;
