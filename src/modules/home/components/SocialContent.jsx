import React from 'react';
import '../styles/overview.css';

import { socialContent } from '../../../constant/app/home/home';
import { ICONS } from '../../../assets/icons';

const SocialContent = ({ whatsapp }) => {
  return (
    <div className='socialContent-main-container'>
      {whatsapp ? (
        <div className='socialContent-container flex-row align-center'>
          <img
            src={ICONS?.SocialContent}
            alt='socialContent'
          />
          <span>Social Content</span>
        </div>
      ) : (
        <div className='socialContent-container flex-row align-center'>
          <img
            src={ICONS?.Whatsapp}
            alt='socialContent'
          />
          <span>WhatsApp broadcast</span>
        </div>
      )}

      <div className='socialContent-wrapper flex-row align-center space-between'>
        {socialContent?.map((item) => (
          <div
            key={item?.id}
            className='socialContent-wrap flex-row align-center '>
            <img
              src={item?.icon}
              alt='socialContent'
            />
            <div className='socialContent-span flex-column pl-10'>
              <span>{item?.name}</span>
              <span>{item?.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialContent;
