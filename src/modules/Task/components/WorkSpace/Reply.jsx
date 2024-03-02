import React, { useState } from 'react';
import '../../styles/WorkSpace/whatsapp.css';

import { ICONS } from '../../../../assets/icons/index';

const Reply = () => {
  const [value, setValue] = useState('');
  const initialText = `Write message`;
  return (
    <div className='Reply'>
      <div className='flex-row align-center  '>
        <img
          src={ICONS?.TemplateReply}
          alt='replay'
          style={{ width: '28px', height: '28px' }}
        />
        <p>Reply Message #1</p>
        <img
          src={ICONS?.campaignDelete}
          alt='delete'
        />
      </div>
      <div className='textarea-button align-center'>
        <textarea
          placeholder={initialText}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className='TextEditor-main flex-row'>
          <div className='TextEditor flex-row space-evenly'>
            <img
              src={ICONS?.BoldIcon}
              alt='bold'
            />
            <img
              src={ICONS?.ItalicIcon}
              alt='italic'
            />
            <img
              src={ICONS?.ListNumberIcon}
              alt='listNumber'
            />
            <img
              src={ICONS?.SmileIcon}
              alt='smile'
            />
            <img
              src={ICONS?.ListAngledIcon}
              alt='Angled'
            />
            <img
              src={ICONS?.CalibratesIcon}
              alt='Calibrates'
            />
            <img
              src={ICONS?.StarIcon}
              alt='star'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reply;
