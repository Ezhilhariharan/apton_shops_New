import React from 'react';
import './text.css';

import { ICONS } from '../../../assets/icons';


function TextEditior() {
    return (
      <div className='TextEditior-container flex row space-evenly   '>
        
          <img
            src={ICONS?.BoldIcon}
            alt='bold'
          />
          <img
            src={ICONS?.ItalicIcon}
            alt='Italic'
          />
          <img
            src={ICONS?.UnderLineIcon}
            alt='bold'
          />
          <img
            src={ICONS?.HeaderIcon}
            alt='header'
          />
          <img
            src={ICONS?.ListIcon}
            alt='list'
          />
          <img
            src={ICONS?.ListNumberIcon}
            alt='listnumber'
          />
          <img
            src={ICONS?.ListAngledIcon}
            alt='Angled'
          />
          <img
            src={ICONS?.SmileIcon}
            alt='smile'
          />
          <img
            src={ICONS?.AtIcon}
            alt='at'
          />
          <img
            src={ICONS?.StarIcon}
            alt='star'
          />
        </div>
    );
}
export default TextEditior;