import React from 'react';
import './DropDown.css';

const DropDown = ({ iconPrefix, iconSuffix, title, onClick }) => {
  return (
    <>
      <div
        className='dropDown-container'
        onClick={onClick}>
        {iconPrefix && (
          <img
            alt='leftImage'
            className='leftImage'
            src={iconPrefix}
          />
        )}
        {title === 'Delete' ? (
          <span style={{ color: 'var(--fontRed)' }}>{title}</span>
        ) : (
          <span>{title}</span>
        )}
        {iconSuffix && (
          <img
            alt='leftImage'
            className='leftImage'
            src={iconSuffix}
          />
        )}
      </div>
    </>
  );
};

export default DropDown;
