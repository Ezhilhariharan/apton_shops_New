import React, { useState } from 'react';
import '../styles/inbox.css';

import { conversationMessageList } from '../../../constant/app/inbox/Inbox';
import { ICONS } from '../../../assets/icons';

const ConversationList = () => {
    const [favourite, setFavourite] = useState(false);

    const handleClick = (itemId) => {
      setFavourite((prevFavourites) => ({
        ...prevFavourites,
        [itemId]: !prevFavourites[itemId],
      }));
    };
  return (
    <div className='conversationMessageList-main-container'>
      {conversationMessageList?.map((item) => (
        <div
          key={item?.id}
          className='conversationMessageList-container flex-row'>
          <div className='w-100 flex-row'>
            <img
              src={item?.icon}
              alt='inbox'
              className='message-profile-icon'
            />
            <img
              src={item?.icon1}
              alt='inbox'
              className='message-whatsapp-icon'
            />
            <div className='conversation-message flex-column pl-10 pt-5'>
              <div className='conversation-title flex-row align-center space-between'>
                <span>{item?.name}</span>
                <span className='conversation-time'>{item?.time}</span>
              </div>
              <div className='conversation-content flex-row align-center space-between'>
                <span>{item?.content}</span>
                <span className='conversation-read'>3</span>
              </div>
            </div>
          </div>
          <div className='inbox-radio pt-10 flex-column space-between'>
            <label className='checkBoxContainer1 '>
              <input
                type='checkbox'
                name='checkbox'
                // onChange={(e) => selectingAllList(e)}
              />
            </label>

            {favourite[item?.id] ? (
              <img
                src={ICONS?.favourite}
                alt='inboxStar'
                onClick={() => handleClick(item?.id)}
              />
            ) : (
              <img
                src={ICONS?.inboxStar}
                alt='inboxStar'
                onClick={() => handleClick(item?.id)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConversationList;
