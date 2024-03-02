import React from 'react';

import { ICONS } from '../../../assets/icons';

const InboxRight = () => {
  return (
    <div className='inbox-right-container p-10 flex-column'>
      <div className=' flex-column '>
        <div className='inbox-right-wrapper-main w-100 flex-row align-center justify-center'>
          <div className='inbox-right-wrapper'>
            <img
              src={ICONS?.inboxProfile}
              alt='inbox'
              className='message-profile-icon1'
            />
            <img
              src={ICONS?.Whatsapp}
              alt='inbox'
              className='message-whatsapp-icon1'
            />
          </div>
        </div>
        <div className='inbox-name flex-row align-center justify-center pt-10'>
          <img
            src={ICONS?.inboxNameIcon}
            alt='inboxNameIcon'
          />
          <span>Riya Magar</span>
        </div>
        <div className='inbox-middle flex-column'>
          <div className='inbox-middle2-icons flex-row pl-10'>
            <img
              src={ICONS?.AccountHomeIcon}
              alt='AccountHomeIcon'
            />
            <span> - </span>
          </div>
          <div className='inbox-middle2-icons flex-row pl-10 pt-10'>
            <img
              src={ICONS?.EmailIcon}
              alt='AccountHomeIcon'
            />
            <span> - </span>
          </div>
        </div>
        <div className='inbox-middle2 pt-10'>
          <span className='inbox-middle2-about'>About this contact</span>
          <div className='inbox-middle2-icons flex-row pl-10 pt-10'>
            <img
              src={ICONS?.EmailIcon}
              alt='AccountHomeIcon'
            />
            <span> - </span>
          </div>
          <div className='inbox-middle2-icons flex-row pl-10 pt-10'>
            <img
              src={ICONS?.inboxGlobe}
              alt='AccountHomeIcon'
            />
            <span> - </span>
          </div>
          <div className='inbox-middle2-icons flex-row pl-10 pt-10'>
            <img
              src={ICONS?.PhoneIcon}
              alt='AccountHomeIcon'
            />
            <span> +91 98430 98440 </span>
          </div>
        </div>
        <div className='inbox-footer flex-column'>
          <span>Lifecycle stage</span>
          <span>Lead</span>
        </div>
      </div>
    </div>
  );
};

export default InboxRight;
