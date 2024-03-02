import React, { useState } from 'react';
import './GoGrow.css'

import { ICONS } from '../../../assets/icons/index';

const GoGrowInput = ({ isExpanded, toggleHi }) => {
  const [value, setValue] = useState('');

  const initialText = `Ask anything to GG`;

  return (
    <div
      className='gg-header'
      onClick={toggleHi}>
      <div className='gg-footer'>
        <img
          src={ICONS?.starIcon}
          alt='starIcon'
        />
        <span> | </span>
        <div className='gg-textarea-wrap'>
          <textarea
            placeholder={initialText}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='gg-textarea'
          />
        </div>
      </div>

      {isExpanded ? (
        <img
          src={ICONS?.transitionIcon}
          alt='transition'
        />
      ) : (
        <img
          src={ICONS?.transitionInactiveIcon}
          alt='transition'
        />
      )}
    </div>
  );
};

export default GoGrowInput;
