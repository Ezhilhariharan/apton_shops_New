import React from 'react'
import '../styles/inboxExtended.css'

import {inboxChat} from '../../../constant/app/inbox/Inbox'

const LeftChat = () => {
  return (
    <div className='left-chat-main-container'>
      <div className=''>
        {inboxChat?.map((item) => (
            <div
              key={item?.id}
              className='left-chat-container'>
              <span>{item?.content}</span>
            </div>
        ))}
      </div>
    </div>
  );
}

export default LeftChat