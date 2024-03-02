import React, { useState } from 'react';
// import './style/Dashboard.css';
import { Button } from '../../form/Button/Button'
import { ICONS } from '../../../assets/icons';

const Step1Information = ({ handleDetailsClick }) => {
  const [value, setValue] = useState('');
  const initialText = `Eg:- i’m a content creator, create content about food, travel, and living, i’m a content creator, create content about food, travel, and living`;
  return (
    <div className='information'>
      <p>Could you please tell me about yourself and your product or services?</p>
      <div className='textarea-button flex-row align-center space-between'>
        
        <textarea
          placeholder={initialText}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          size={'xs'}
          iconSuffix={ICONS.sendIcon}
          onClick={handleDetailsClick}
        />
      </div>
    </div>
  );
};

export default Step1Information;
