import React, { useState } from 'react';
import './GoGrow.css';

import { ICONS } from '../../../assets/icons/index';
import GoGrowInput from './GoGrowInput';

const GoGrow = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleHi = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const toggleClose = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <div className={`gg-wrapper ${isExpanded ? 'expanded' : ''}`}>
      <div className={`gg-content ${isExpanded ? 'expanded' : ''}`}>
        <div className='gg-hi'>
          {isExpanded ? (
            <img
              src={ICONS.leftArrowIcon}
              alt='leftArrowIcon'
              onClick={toggleClose}
            />
          ) : null}
          <span>Chat with GG</span>
        </div>
        {isExpanded ? (
          <div className='help-wrapper'>
            <img
              src={ICONS?.ggLogoIcon}
              alt='gglogo'
            />
            <div className='help-wrap'>
              <span>Hi there 👋</span>
              <p>How we can help?</p>
            </div>
          </div>
        ) : null}
      </div>
      <GoGrowInput
        isExpanded={isExpanded}
        toggleHi={toggleHi}
      />
    </div>
  );
};

export default GoGrow;
