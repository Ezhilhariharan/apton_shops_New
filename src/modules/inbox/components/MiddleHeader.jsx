import React, { useState } from 'react';

import { conversationMessageMiddle } from '../../../constant/app/inbox/Inbox';
import { ICONS } from '../../../assets/icons';

const MiddleHeader = () => {
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
  };
  return (
    <div className='conversation-main-container flex-column space-between'>
      {conversationMessageMiddle?.map((item) => (
        <div
          key={item?.id}
          className='middle-header-main-container flex-row align-center space-between'>
          <div className='middle-header-container flex-row'>
            <img
              src={item?.icon}
              alt='conversationMessageMiddle'
            />
            <div className='middle-header-wrapper flex-column pl-10'>
              <span>{item?.name}</span>
              <span>{item?.content}</span>
            </div>
          </div>
          <div className='middle-header-right-wrapper flex-row align-center space-between pr-5x'>
            <span>23:52</span>
            {favourite ? (
              <img
                src={ICONS?.favourite}
                alt='inboxStar'
                onClick={handleClick}
              />
            ) : (
              <img
                src={ICONS?.inboxStar}
                alt='inboxStar'
                onClick={handleClick}
              />
            )}
            <label className='checkBoxContainer pt-5'>
              <input
                type='checkbox'
                name='checkbox'
                // onChange={(e) => selectingAllList(e)}
              />
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiddleHeader;
