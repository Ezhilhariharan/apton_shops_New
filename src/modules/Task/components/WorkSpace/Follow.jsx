import React, { useState } from 'react';
import '../../styles/WorkSpace/whatsapp.css';

import { ICONS } from '../../../../assets/icons/index';
import { images } from '../../../../assets/images/index';
import Followup from './Followup';
import Reply from './Reply';

const Follow = ({SetAddClick,StateClick}) => {
  const [templateAction, setTemplateAction] = useState('');
  

 
  const handleAddClick = (item) => {
    setTemplateAction(item);
  };
  return (
    <div
      className='AddIcon flex-column align-center justify-center'
      onClick={() => SetAddClick()}>
      {templateAction === '' && (
        <img
          src={ICONS?.whatsappAddIcon}
          alt='plus icon'
        />
      )}
      {StateClick && (
        <div className='message-menu-container flex-row space-evenly' >
          <div
            className='message flex-row align-center space-evenly'
            onClick={() => handleAddClick('Follow up')}>
            <>
              <img
                src={images?.MessageIcon}
                alt='message icon'
              />
              <span>Follow up</span>
            </>
          </div>

          <div
            className='message flex-row align-center space-evenly '
            onClick={() => handleAddClick('Reply')}>
            <img
              src={ICONS?.TemplateReply}
              alt='replay'
              style={{ width: '24px', height: '24px' }}
            />
            <span>Reply</span>
          </div>
        </div>
      )}
      {templateAction === 'Follow up' && <Followup />}
      {templateAction === 'Reply' && <Reply />}
    </div>
  );
};

export default Follow;
