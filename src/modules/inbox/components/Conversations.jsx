import React, { useState } from 'react';
import '../styles/inbox.css';

import { conversation, conversationMessage } from '../../../constant/app/inbox/Inbox';
import MessageTyping from '../../../assets/customSVG/MessageTyping';
import MessagePlus from '../../../assets/customSVG/MessagePlus';
import MessageStar from '../../../assets/customSVG/MessageStar';

const Conversations = () => {
  const [selectedId, setSelectedId] = useState(1);

  const handleClick = (id) => {
    setSelectedId(selectedId === id && id !== 1 ? null : id);
  };
  return (
    <div className='conversation-main-container'>
      <div className='conversation-container flex-row align-center  '>
        {conversation?.map((item) => (
          <div
            key={item?.id}
            className={`conversation-select flex-row align-center space-around pointer ${
              selectedId === item?.id ? 'inbox-selected' : ''
            }`}
            onClick={() => handleClick(item?.id)}>
            {item?.icon === 'inboxMessageTyping' && (
              <MessageTyping
                stroke={selectedId === item?.id ? '#25C277' : '#898E99'}
                color={selectedId === item?.id ? '#25C277' : '#898E99'}
              />
            )}
            {item?.icon === 'inboxMessagePlus' && (
              <MessagePlus
                stroke={selectedId === item?.id ? '#25C277' : '#898E99'}
                color={selectedId === item?.id ? '#25C277' : '#898E99'}
              />
            )}
            {item?.icon === 'inboxStar' && (
              <MessageStar
                stroke={selectedId === item?.id ? '#25C277' : '#898E99'}
                color={selectedId === item?.id ? '#25C277' : '#898E99'}
              />
            )}
          </div>
        ))}
      </div>
      {selectedId && (
        <div className='conversation-message-container flex-row align-center'>
          {conversationMessage
            ?.filter((item) => item?.id === selectedId)
            .map((item) => (
              <div
                key={item?.id}
                className='conversation-message-wrapper flex-row align-center'>
                <img
                  src={item?.icon}
                  alt='inbox'
                />
                <span>{item?.list}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Conversations;
