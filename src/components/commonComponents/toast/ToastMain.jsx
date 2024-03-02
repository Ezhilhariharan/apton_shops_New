import React, { useState } from 'react';
import './toast.css';

import { ICONS } from '../../../assets/icons/index';

const ToastMain = ({ message, type, item, handleClick }) => {
  let imageBackgroundColor = '';
  switch (type) {
    case 'Success':
      imageBackgroundColor = 'var(--primary)';
      break;
    case 'Infromation':
      imageBackgroundColor = 'var( --informationBlue )';
      break;
    case 'Warning':
      imageBackgroundColor = 'var( --secondary)';
      break;
    case 'Error':
      imageBackgroundColor = 'var(--backgroundRed)';
      break;
    default:
      break;
  }
  return (
    <div className='toast-container fadeOut flex-row align-center space-between  p-relative'>
      <div className='flex-row align-center '>
        <div
          className='toast-color'
          style={{
            backgroundColor: imageBackgroundColor,
          }}></div>

        {type === 'Success' && (
          <img
            src={ICONS?.CircleCheck}
            alt='noimg'
          />
        )}
        {type === 'Infromation' && (
          <img
            src={ICONS?.InformationIcon}
            alt='infromation'
          />
        )}
        {type === 'Warning' && (
          <img
            src={ICONS?.TrianglewarningIcon}
            alt='warning'
          />
        )}
        {type === 'Error' && (
          <img
            src={ICONS?.WarningIcon}
            alt='error'
          />
        )}
        <div className='toast-content'>{message}</div>
      </div>

      <div className='  icon  flex-end'>
        <img
          src={ICONS?.popupX}
          alt='close'
          className='pointer'
          onClick={() => handleClick(item)}
        />
      </div>
    </div>
  );
};

export default ToastMain;
