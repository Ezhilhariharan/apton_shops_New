import React from 'react';
import '../styles/inboxExtended.css'

import LeftChat from './LeftChat';
import RightChat from './RightChat';

const MiddleBody = () => {
    return (
      <div className='MiddleBody-main-container flex-column'>
        <LeftChat />
        <div className=''>
          <RightChat />
        </div>
      </div>
    );
};

export default MiddleBody;
