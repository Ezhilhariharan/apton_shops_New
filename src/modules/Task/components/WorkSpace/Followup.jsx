import React from 'react';
import '../../styles/WorkSpace/whatsapp.css';

import { images } from '../../../../assets/images/index';
import { ICONS } from '../../../../assets/icons/index';

import SelectTemplate from './SelectTemplate';
const Followup = () => {
  return (
    <div className='select-container align-center'>
      <div className='select-container-wrapper flex-row align-center' >
        <img
          src={images?.MessageIcon}
          alt='message icon'
        />
        <span>Select template</span>
        <img
          src={ICONS?.ToggleIcon}
          alt='dropdown'
         
        />
      </div>
      <SelectTemplate />
    </div>
  );
};

export default Followup;
